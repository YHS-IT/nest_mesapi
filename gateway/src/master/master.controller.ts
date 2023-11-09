import { Body, Controller,Post } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterLoginDTO } from './dto/login.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Master')
@Controller('/api/master')
export class MasterController {
    constructor(private masterService:MasterService){}

    @ApiOperation({summary:'BaroAdmin 로그인 api'})
    @ApiOkResponse({
        schema:{
            example:{
                success:true,
                token:"token(string)(expire:1day)",
                role:"string"
            }
        }
    })
    @Post('/login')
    async login(
        @Body() body : MasterLoginDTO
    ){
       return await this.masterService.login(body);
    }


}
