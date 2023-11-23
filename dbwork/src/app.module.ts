import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';
import { DbflowService } from './dbflow/dbflow.service';
import { DbflowController } from './dbflow/dbflow.controller';
import { DbflowModule } from './dbflow/dbflow.module';
import { CustomLogger } from './lib/typeorm.customLogger';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: process.env.NODE_ENV ? '.env.prod' : '.env',
    }),
    TypeOrmModule.forRoot({
      type:'mysql',
      host:process.env.DB_HOST,
      port:parseInt(process.env.DB_PORT),
      database:process.env.DB_DATABASE,
      username:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      timezone: 'Asia/Seoul',
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
      entities:[
        __dirname +'/entities/*{.ts,.js}'
      ],
      poolSize:10,
      extra:{
        socketPath: process.env.DB_SOCKETPATH
      },
      logger: new CustomLogger(true),
    }),
    DbflowModule,
    // TypeOrmModule.forRoot({

    // })
  ],
  controllers: [AppController, DbflowController],
  providers: [AppService, DbflowService],
})

export class AppModule {}
