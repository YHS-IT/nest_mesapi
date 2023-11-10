import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { UserService } from './master.user.service';
import { UserController } from './master.user.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      SvcEnterprise
    ])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class MasterModule {}
