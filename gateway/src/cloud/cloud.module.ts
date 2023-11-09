import { Module } from '@nestjs/common';
import { CloudService } from './cloud.service';
import { CloudController } from './cloud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SvcEnterprise,
    ])
  ],
  providers: [CloudService],
  controllers: [CloudController]
})
export class CloudModule {}
