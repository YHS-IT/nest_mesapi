import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatusService } from './status.service';
import { ApiOkResponse, ApiOperation, ApiTags, ApiSecurity, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('status')
@UseGuards(AuthGuard)
@ApiTags('Status')
@ApiSecurity('x-access-token')

export class StatusController {
    constructor(
        private statusService:StatusService
    ){}
    @ApiOperation({summary:'가장최근 db를사용한 시간을 반환하는 api'})
    @ApiOkResponse({
        schema:{
            example:[{success:true,mysql:"UTC Time(2023-11-09T05:35:39.793Z)"}]
        }
    })
    @ApiUnauthorizedResponse({
        schema:{
            example:{
                statusCode:401,
                message:'Unauthorized'
            }
        }
    })
    @Get('info')
    async info(){
      return await this.statusService.info();
    }



}
