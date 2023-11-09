import { Controller, Get, UseGuards } from '@nestjs/common';
import { MasterService } from './master.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/api/master')
@ApiTags('Master')
@UseGuards(AuthGuard)

export class MasterController {
    constructor(
        private masterService:MasterService
    ){}
    
    @ApiOperation({summary:'회사리스트를 전부 불러오는 api'})
    @Get('/enterprise/list')
    async list(){
       return await this.masterService.list();
    }


}
