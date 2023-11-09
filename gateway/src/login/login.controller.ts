import { Body, Controller, Param, Post , Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiExtraModels, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { LoginDTO } from './dto/login.dto';
import { machineIdDTO } from './dto/login.machineId.dto';
import { transmitterDTO } from './dto/login.transmitter.dto';
@ApiTags('Login')
@Controller('/api/login')

export class LoginController {
    constructor(private loginService: LoginService){}
    
    // @ApiExtraModels(LoginDTO);
    @ApiOperation({ summary: '로그인 api' })
    @ApiOkResponse({
        schema:{
            example:{
                success:true,
                token:"token(string)(expire:100year)",
                enterprise_id:1,
                enterprise:"YHS(string)",
            }
        }
    })
    @ApiBadRequestResponse({
        schema:{
            example:{success:false,msg:"string"}
        }
    })
    @Post('/login')
    async login(
        @Body() body : LoginDTO
    ){
        return await this.loginService.login(body);
    }

    // 2단계화면 로그인
    @ApiOperation({ summary: '2단계(mon) 로그인 api' })
    @ApiOkResponse({
        schema:{
            example:{
                success:true,
                token:"token(string)(expire:100year)",
                enterprise_id:"number",
                enterprise:"YHS(string)",
                mon_id:"number"
            }
        }
    })
    @ApiBadRequestResponse({
        schema:{
            example:{success:false,msg:"string"}
        }
    })
    @Post('/monLogin')
    async monLogin(
        @Body() body : LoginDTO
    ){
        return await this.loginService.monLogin(body);
    }

    // 추후 Get로 변경 및 DTO삭제 필요
    @ApiOperation({ summary: '엣지 로그인' })
    @ApiOkResponse({
        schema:{
            example:{
                data:{
                    "edge_id":"number",
                    "enterprise_id":"number",
                    "enterprise":"string",
                    "token":"token(string)"
                }
                
            }
        }
    })
    @Post('/transmitter')
    async edgeInfo(
        @Body() body : transmitterDTO
    ){
         return await this.loginService.edgeInfo(body.transmitter);
    }

    // 추후 Get로 변경 및 DTO삭제 필요
    @ApiOperation({ summary: '엣지 최초 등록된 물리장비인지 확인하는 api' })
    @ApiOkResponse({
        schema:{
            example:{
                data:[
                    {
                        "TRANSMITTER":"string"
                    }
                ]
            }
        }
    })
    @Post('/edge_machine')
    async edgeMachine(
        @Body() body : machineIdDTO
    ){
        return await this.loginService.edgeMachine(body.machineId);
    }
}
