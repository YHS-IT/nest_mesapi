import { Body, Controller, Post, UseGuards , Request} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse, ApiSecurity } from '@nestjs/swagger';
import { CloudService } from './cloud.service';
import { EnterpriseDTO } from './dto/login.dto';

@ApiTags('Cloud')
@ApiSecurity('x-access-token')
@Controller('/api/cloud')
@UseGuards(AuthGuard)

export class CloudController {
    constructor(private cloudService:CloudService){}

    @Post('/enterprise')
    @ApiOperation({summary: '회사 cloud 정보(api,websocket,gcp service key)을 주는 api'})
    @ApiOkResponse({
        schema:{
            example:{
                data:[
                    {
                        enterprise_id:"number",
                        data_topic:'string',
                        api:'string(url)',
                        websocket:'string(url)',
                        enc_data:'string(gcp service key)'
                    }
                ]
            }
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
    async enterpriseInfo(
        @Body()  body : EnterpriseDTO
    ){
        return this.cloudService.enterpriseInfo(body);
    }



}
