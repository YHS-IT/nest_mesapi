import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { EnterpriseService } from './master.enterprise.service';
import { EnterpriseController } from './master.enterprise.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      SvcEnterprise
    ])
  ],
  providers: [EnterpriseService],
  controllers: [EnterpriseController]
})
export class MasterModule {}
