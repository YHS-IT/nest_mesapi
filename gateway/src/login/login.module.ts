import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcUser } from '../entities/SvcUser';
import { LoginController } from './login.controller';
import { SvcMonitor } from 'src/entities/SvcMonitor';
import { SvcEdge } from 'src/entities/SvcEdge';
import { SvcEdgemachine } from 'src/entities/SvcEdgemachine';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      SvcUser,
      SvcMonitor,
      SvcEdge,
      SvcEdgemachine
    ]),

  ],
  controllers:[LoginController],
  providers: [LoginService],

})
export class LoginModule {}
