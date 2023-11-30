import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { ProcessHist } from 'src/entities/ProcessHist';
import { Repository } from 'typeorm';

@Injectable()
export class DbworkService {
  private _worktime: number;

  constructor(
    @InjectRepository(ProcessHist)
    private processHistRepository:Repository<ProcessHist>
  ){}
  
  
  @OnEvent('job', { async: true } )
  handleRDBEvent(data: string) {
    let data_split = data.split('|');
    let mode = data_split[1];
    if(mode == 'PART_COUNT'){
      this.insertProcessHist(data_split);
    }else if(mode == 'MESSAGE' || mode == 'ALARM'){
  

    }
    
  }

  async insertMsg(){

  }

  async insertProcessHist(data: Array<string>){
    // console.log(data.splice(2));
    let [ent,mid,program,count,plan,start_time,end_time,period,idle,active_time,data_modi,mkey] = data.splice(2);
    console.log(ent,mid,program,count,plan,start_time,end_time,period,idle,active_time,data_modi,mkey)
    
  }
  



  async getWorktime(){
    return this._worktime;
  }
  

}
