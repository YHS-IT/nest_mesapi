import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { WinstonModule } from 'nest-winston';
import { winstonLogger } from './lib/winstonLogger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { AuthModule } from'./auth/auth.module'
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // winstonLogger
    WinstonModule.forRoot(winstonLogger()),
    // .env file
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: process.env.NODE_ENV ? '.env.prod' : '.env',
    }),
    // jwtToken 
    JwtModule.register({
      global:true,
      secret: process.env.JWT_SECRET,
    }),
    // db 연결 
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
      }
    }),
    AuthModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService ],
})

export class AppModule {}
