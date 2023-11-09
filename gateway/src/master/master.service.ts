import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SvcAdmin } from 'src/entities/SvcAdmin';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class MasterService {
    constructor(
        @InjectRepository(SvcAdmin)
        private adminRepository:Repository<SvcAdmin>,
        private jwtService:JwtService
    ){}

    async login(body){
        const {username,password} = body;
        let info = await this.adminRepository
                .createQueryBuilder('admin')
                .select(['admin.name name','admin.password password','role'])
                .where('admin.name = :name',{name:username})
                .getRawOne();
        if(info){
            if(info.password == password){
                let payload = {_id:username,username:username,role:info.role};
                let response = this.jwtService.signAsync(
                    payload,
                    {expiresIn:'1d'}
                ).then(token=>{
                    return {success:true,token:token,role:info.role};
                }).catch(err=>{
                    return {success:false, msg:'TOKEN_GENERATE_FAIL'};
                })
                return response;
            }else{
                return {success:false,msg:'INCORRECT_PASSWORD'};
            }
        }else{
            return {success:false,mse:'USER_NOT_EXIST'} ;
        }
    }
}
