import { Module } from '@nestjs/common';
import { DbworkService } from './dbwork.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessHist } from 'src/entities/ProcessHist';
import { ProcessLot } from 'src/entities/ProcessLot';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProcessHist,ProcessLot
    ])
  ],

  providers: [DbworkService]
})
export class DbworkModule {}
