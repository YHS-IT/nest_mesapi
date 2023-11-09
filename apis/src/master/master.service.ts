import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { Repository } from 'typeorm';

@Injectable()
export class MasterService {
    constructor(
        @InjectRepository(SvcEnterprise)
        private enterpriseRepository:Repository<SvcEnterprise>
    ){}
    async list(){
        let entList = await this.enterpriseRepository
                    .createQueryBuilder('enterprise')
                    .select('*')
                    .getRawMany();
        return {data:entList}  
    }


}
