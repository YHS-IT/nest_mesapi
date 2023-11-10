import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { MonitorService } from './master.user.service';
import { MonitorController } from './master.user.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      SvcEnterprise
    ])
  ],
  providers: [MonitorService],
  controllers: [MonitorController]
})
export class MasterModule {}
