import { OnModuleInit, Injectable,Inject } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { PubSub } from '@google-cloud/pubsub';

@Injectable()
export class PubsubService implements OnModuleInit {
  private pubsub: PubSub;
  private pubsubTopic: string = process.env.DATA_TOPIC;
  private pubsubSubscription: string = process.env.DATA_SUBSCRIPTION;
  private retryInterval: number = 5000; // 5 seconds
  private maxRetryAttempts: number = 5;
  private retryAttempts: number = 0;

  constructor(
    private readonly eventEmitter: EventEmitter2,
  ) {
    this.pubsub = new PubSub(
      { 
        projectId:"prd-barofactory",
        credentials:{
          private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDl56fGFfBjHOkj\nEEbMl2X9sk62yT9vskinjoN5whF6ojJ0k8KF1AWz39E663cogJX8HRedx4SDFKqf\n+/KRqfmd5JV93p1u9kv35exwh6I8+gBoKU4SWsyaGclwyXEZUtk1UYfnZAsgbZOB\niEzWtm+DNtkyUWNjKkCwEqv7YE6uEiRcplMrjBufNIt979xKqxLNXsIpsWZE9Ht1\nqhtzPv76zYEFTZ80Eo8wlERxvrVo1B8E4ENwafc9Qzipk1mLI/Lfx+tkVPlJANeT\nG/xwhPNCEo4UhgGxsP5puIPrk45+z4dTpJU+zZJfr4nixgF6n6K++ZhNy9JHV2rN\nedDg37MfAgMBAAECggEACAsVlWUMGXOX+82PJIuWxQxEG7n+ZFUrnI0XBXSoMY7+\nI+ei0mrLXkfSJUplS1SgVVyGiH3D9uVgs3iC5odjVRumV+vTZzU/uCcM9sI6sgEZ\nxYsjEO+ooSrjdMo0u5WTRX3E5ZqxlvYDx0WHpqq69loTZDgbuYrvY27rzGofUTtT\n78iNUpBp3ZlGNfraR6iRaoHEZ8Sa48248WjaP40+LQx/Aet9u4ooOc0ehuesjjOB\nP5Aku4vrM6wSn12iXuqwY1U6DaznJBjlmQ0ZTIt/FP+vjgi8/GaAyxIPDSnnEoeV\npr06aV122agIWTxNBChIV5llaMZx1l7cJ86KWzHinQKBgQD7EchNTpqoqWgeGoW5\nCfVl3LKAfLls+AR43+7m9g8jkoAhNAwU8/41WuBcJtc216mmCX/fa7ef+9nK26IK\nl4WOcI7EpQwaG/J0gbOJKm95Rbp6QqT1G5sov/cxGmxD3hDha9PNb/0uAUNgzreG\nJ/sic2A9S7dNY1959zBOpSmCEwKBgQDqa3iTM6usm8qM65rKARD2KDMMmYV5tfid\n8+7KE5VhHZs1Tk6DC5i9qBKp25CFjysEk66pwtxZpVjfGeSvFBpUWqXWwmDqhvzk\nQWWCG4LrM56GJVM2Gv1qv3Np8P+EV1Da53m2TiYPpgX1/HGs3SarS2xu4behZqwz\nTq6lv+ZMRQKBgA6Qt4gUmVBTk6C7dSqI812XchuWIMO7l7bTdu6bM8GijCBg/ppw\nlTzPKtjtv+qElGj3gB2cCCkV2Uq1dy8aHztmOEIcORmCqYwswhehCJqGew0AtMUr\ndtLkYBjPKZy+U0hgkwcGCjATDq+dDnSP+TfEbb7gl5+7thxDROArIL9VAoGAMDlP\noqichnO+JWNKgofZn2oBpnPmm3Ut4gCOfQ+uST438a1cRWUbVNjAjiTXBELBjL18\nzvuBLQfw0mSXQNUX3YaQWy+9lEGUwLgbU7qpIg2KbPo8tgKzY0RjT8X+KpFz1rSL\nu080UT/MNiBqmi8ch1yKv/y7M/7VKfDjyMFDdSkCgYEA4tSc7UnNvo+wgCvz6GRy\nf3zZ5+ydssTC4IWIySc6l1JQYsER4ZZV4o2LQrkybxOU9i/cJREwaB6XJnYD5YPu\nLEJIh7FRObnP0BUgfwN8DLKOGJ2d+nXzGjp2FCkyNbIS0W12nryRx+OAT7eTscTR\nOlyMuSI1gieitapnJmEFE44=\n-----END PRIVATE KEY-----\n",
          client_email:"yoontaehyun@prd-barofactory.iam.gserviceaccount.com"
        }
      }
    );
  }

  async onModuleInit() {
    await this.subscribeWithRetry();
  }

  private async subscribe(subscription) {
    const errorHandler = (error: any) => {
      console.log('pubsub error', error);
      this.retrySubscribe();
    };

    const messageHandler = async (message: any) => {
      message.ack();
      if (message.data instanceof Buffer) {
        let text = Buffer.from(message.data).toString();
        if (text.indexOf('EXTRA|') > -1) {
          this.eventEmitter.emit('job', text);
        } else {
          this.eventEmitter.emit('bigquery', text);
        }
      }
    };


    subscription.on('message', messageHandler);
    subscription.on('error', errorHandler);
  }
  // subscription exist check
  private async checkSubscription(){
    const topic = this.pubsub.topic(this.pubsubTopic);
    const subscription = topic.subscription(this.pubsubSubscription);
    
    const [exist] = await subscription.exists();
    if(exist){
      this.subscribe(subscription)
    }else{
      await subscription.create({
        messageRetentionDuration:1200,
        expirationPolicy:{
          ttl:{seconds:86400}
        }
      });
      this.subscribe(subscription);
    }
  }

  private retrySubscribe() {
    if (this.retryAttempts < this.maxRetryAttempts) {
      this.retryAttempts++;
      console.log(`Retrying subscribe. Attempt ${this.retryAttempts}...`);
      setTimeout(() => this.subscribeWithRetry(), this.retryInterval);
    } else {
      console.log('Max retry attempts reached. Could not subscribe.');
    }
  }

  private async subscribeWithRetry() {
    await this.checkSubscription().catch(() => this.retrySubscribe());
  }

  // @OnEvent('job')
  // handleJobEvent(data: string) {
  //   console.log('Received job event:', data);
  // }

  // @OnEvent('bigquery')
  // handleBigQueryEvent(data: string) {
    
    // console.log('Received bigquery event:', data);
  // }
}
