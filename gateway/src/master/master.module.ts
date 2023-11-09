import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterController } from './master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcAdmin } from 'src/entities/SvcAdmin';
@Module({
  imports:[ 
    TypeOrmModule.forFeature([SvcAdmin]) 
  ],
  providers: [MasterService],
  controllers: [MasterController]
})
export class MasterModule {}
