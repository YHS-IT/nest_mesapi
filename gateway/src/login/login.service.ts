import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SvcUser } from '../entities/SvcUser';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Logger } from 'winston';
import {WINSTON_MODULE_PROVIDER} from 'nest-winston';
import { SvcMonitor } from 'src/entities/SvcMonitor';
import { SvcEdge } from 'src/entities/SvcEdge';
import { SvcEdgemachine } from 'src/entities/SvcEdgemachine';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(SvcUser)
        private userRepository:Repository<SvcUser>,
        @InjectRepository(SvcMonitor)
        private monRepository:Repository<SvcMonitor>,
        @InjectRepository(SvcEdge)
        private edgeRepository:Repository<SvcEdge>,
        @InjectRepository(SvcEdgemachine)
        private edgeMachineRepository:Repository<SvcEdgemachine>,
        private jwtService:JwtService,
        @Inject(WINSTON_MODULE_PROVIDER)
        private logger:Logger,
    ){}
    
    async edgeMachine(machineId){
        let transmitter = await this.edgeRepository
                        .createQueryBuilder('edge')
                        .innerJoin('edge.svcEdgemachines','svcEdgemachines')
                        .select('edge.name')
                        .where('svcEdgemachines.mid = :machineId',{machineId})
                        .andWhere('svcEdgemachines.status = "CONFIRM"')
                        .getRawOne();
        if(transmitter){
            return {data:[transmitter]}
        } else{
            let insertEdge = this.edgeMachineRepository
                            .createQueryBuilder('edgeMachine')
                            .insert()
                            .into(SvcEdgemachine)
                            .values(
                                {
                                    mid:machineId,
                                    status:'WAIT'
                                }
                            )
                            .execute();             
        }            

    }


    /* 
        엣지 로그인 
        EDGE 정보 : 해당 edge프로그램이 어디에 속한 enterprise 정보와 api 접근가능한 TOKEN 전송
    */
    async edgeInfo(transmitter){
        let eInfo = await this.edgeRepository
                    .createQueryBuilder('edge')
                    .innerJoin('edge.enterprise','enterprise')
                    .select(['enterprise.name','enterprise.id','edge.id'])
                    .where('edge.name = :transmitter',{ transmitter })
                    .getRawOne();
        if(eInfo){
            let payload = {_id:transmitter,username:transmitter,enterprise:eInfo.enterprise_name,enterprise_id:eInfo.enterprise_id,edge_id:eInfo.edge_id,role:'edge'};
            let response = this.jwtService.signAsync(
                payload,
                {expiresIn:'100y'}
            ).then(token=>{
                eInfo.token = token;
                return {data: [eInfo] };
            }).catch(err=>{
                this.logger.error(`edge jwt error ${err.message}`);
                eInfo.msg = 'TOKEN_GENERATE_FAIL';
                return {data: [eInfo] };
            })
            return response;
        }else{
            return {msg:'INCORRECT_TRANSMITTER'};
        }
    }


    async monLogin(body){
        const { username, password, monitor } = body;
        this.logger.info(`${username}  ${password}  ${monitor}`);
        let getPass = await this.userRepository 
                    .createQueryBuilder('user')
                    .innerJoin('user.enterprise','enterprise')
                    .select(['user.password AS password','enterprise.name AS name','user.enterprise'])
                    .where('user.name = :username',{ username })
                    .getRawOne();
        if(getPass){
            if(password == getPass.password){
                let getMonInfo = await this.monRepository
                                .createQueryBuilder('mon')
                                .innerJoin('mon.enterprise','enterprise')
                                .select(['mon.id','enterprise.id','enterprise.name'])
                                .where('mon.name= :monitor',{monitor:monitor})     
                                .andWhere('enterprise.name= :name',{name:getPass.name})
                                .getRawOne();
                if(getMonInfo){
                    let payload = {username: username,enteprise:getPass.name,enterprise_id:getPass.enterprise_id,monitor_id:getMonInfo.mon_id,role:'monitor'};
                    let response = this.jwtService.signAsync(
                        payload,
                        { expiresIn:'100y'}
                    ).then(token=>{
                        return {success:true,token:token,enterprise:getPass.name,enterprise_id:getPass.enterprise_id,mon_id:getMonInfo.mon_id};
                    }).catch(err=>{
                        this.logger.error(`monLogin jwt error ${err.message}`)
                        return {success:false,msg:'TOKEN_GENERATE_FAIL'};
                    })
                    return response;
                }else{
                    return {success:false,msg:'INCORRECT_MONITOR_NAME'};
                }       
            }else{
                return {success:false,msg:'INCORRECT_PASSWORD'};
            }

        }else{
            return {success:false,msg:'USER_NOT_EXIST'};
        }

    }


    async login(body){
        const {username,password} = body;
        let info= await this.userRepository
            .createQueryBuilder('user')
            .innerJoin('user.enterprise','enterprise')
            .select(['user.password AS password','user.role AS role'])
            .addSelect(['enterprise.name AS enterprise','enterprise.id AS enterprise_id','enterprise.comment AS name'])
            .where('user.name= :username',{ username})
            .getRawMany();
        if(info.length){
            if(password == info[0].password){
                let payload = {username:username,enterprise:info[0].enterprise,enterprise_id:info[0].enterprise_id,role:info[0].role }
                
                let response = this.jwtService.signAsync(
                    payload,
                    { expiresIn:'100y' }
                ).then(token=>{
                    return {success:true,token:token,enterprise_id:info[0].enterprise_id,enterprise:info[0].enterprise,name:info[0].name}
                }).catch((err)=>{
                    console.log('error',err);
                    return {success:false,msg:"로그인에 문제가 발생하였습니다. 관리자에게 문의 바랍니다."}
                })
                return response;
            }else{
                return {success:false,msg:'비밀번호가 올바르지 않습니다.'};
            }
        }else{
            return {success:false,msg:'계정이 존재하지 않습니다'};
        }
    }

}
