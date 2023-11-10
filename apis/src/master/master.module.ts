import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { EnterpriseService } from './enterprise/master.enterprise.service';
import { EnterpriseController } from './enterprise/master.enterprise.controller';
import { EdgeMachineService } from './edgemachine/master.edgemachine.service';
import { EdegeMachineController } from './edgemachine/master.edgemachine.controller';
import { EdgeController } from './edge/master.edge.controller';
import { EdgeService } from './edge/master.edge.service';
import { UserService } from './user/master.user.service';
import { UserController } from './user/master.user.controller';
import { MonitorService } from './monitor/master.user.service';
import { MonitorController } from './monitor/master.user.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      SvcEnterprise
    ])
  ],
  providers: [EnterpriseService,EdgeMachineService,EdgeService,UserService,MonitorService],
  controllers: [EnterpriseController,EdegeMachineController,EdgeController,UserController,MonitorController]
})
export class MasterModule {}
