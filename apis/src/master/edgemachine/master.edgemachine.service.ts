import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SvcEnterprise } from 'src/entities/SvcEnterprise';
import { Repository } from 'typeorm';

@Injectable()
export class EdgeMachineService {
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

    async updateEnterprise(body){
        let update = await this.enterpriseRepository
                    .createQueryBuilder('enterprise')
                    .update()

        let select = await this.enterpriseRepository
                    .createQueryBuilder('enterprise')
                    .select('*')
                    .where('enterprise.id = :id',)
                    .getRawOne();
    }

}
