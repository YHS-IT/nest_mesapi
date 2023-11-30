import { Module } from '@nestjs/common';
import { PubsubController } from './pubsub.controller';
import { PubsubService } from './pubsub.service';

@Module({
  imports:[
  ],
  controllers:[PubsubController],
  providers:[
    PubsubService,
  ]
})
export class PubsubModule {}
