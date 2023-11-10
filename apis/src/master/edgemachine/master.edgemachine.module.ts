import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { EdgeMachineService } from './master.edgemachine.service';
import { EdegeMachineController } from './master.edgemachine.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      SvcEnterprise
    ])
  ],
  providers: [EdgeMachineService],
  controllers: [EdegeMachineController]
})
export class MasterModule {}
