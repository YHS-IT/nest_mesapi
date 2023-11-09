import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { Repository } from 'typeorm';

@Injectable()
export class CloudService {
    constructor(
        @InjectRepository(SvcEnterprise)
        private enterpriseRepository:Repository<SvcEnterprise>
    ){}

    async enterpriseInfo(body){
        let {transmitter,enterprise} = body;
        let entInfo = await this.enterpriseRepository
                    .createQueryBuilder('enterprise')
                    .innerJoin('enterprise.svcEdges','svcEdge')
                    .select(['enterprise.id','enterprise.data_topic','enterprise.api api','enterprise.websocket websocket','enterprise.enc_data'])
                    .where('enterprise.name = :enterprise',{enterprise})
                    .andWhere('svcEdge.name = :transmitter',{transmitter})
                    .getRawOne();
        return {data:[entInfo]};
    }


}
