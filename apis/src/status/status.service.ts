import { Injectable } from '@nestjs/common';
import { GlobalStore } from 'src/lib/store';

@Injectable()
export class StatusService {


    async info(){
        return {sucess: true, mysql: GlobalStore.query_time};
    }
}
