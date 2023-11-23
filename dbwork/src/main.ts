import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { httpFilter } from './lib/httpFilter';
import { ValidationPipe } from '@nestjs/common';
import { subscribeCNC } from './lib/pubsub';
import CNCSubscriber from './lib/pubsub2';


async function bootstrap() {
  let port = 3095;
  const app = await NestFactory.create(AppModule,{ cors:true });
  
  app.useGlobalFilters(new httpFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true,
    })
  )
  // subscribeCNC("yhs_data","yhs_data_cloud_dbwork_test")
  const cncSubscriber = new CNCSubscriber();

  await app.listen(port,()=>{
    console.log(`open PORT : ${port}`)
  });
}
bootstrap();
