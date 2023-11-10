import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { EdgeService } from './master.edge.service';
import { EdgeController } from './master.edge.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      SvcEnterprise
    ])
  ],
  providers: [EdgeService],
  controllers: [EdgeController]
})
export class MasterModule {}
