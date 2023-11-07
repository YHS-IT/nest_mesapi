import { Body, Controller, Post  } from '@nestjs/common';
import { ApiBadRequestResponse, ApiExtraModels, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { LoginDTO } from './dto/login.dto';

@ApiTags('Login')
@Controller('/api/login')

export class LoginController {
    constructor(private loginService: LoginService){}
    
    // @ApiExtraModels(LoginDTO);
    @ApiOperation({ summary: '로그인 api' })
    @ApiOkResponse({
        schema:{
            example:{success:true,token:"TOKEN",enterprise_id:1,enterprise:"YHS",name:"연합시스템"}
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
        return this.loginService.login(body);
    }

    // 2단계화면 로그인
    @ApiOperation({ summary: '2단계(mon) 로그인 api' })
    @ApiOkResponse({
        schema:{
            example:{success:true,token:"TOKEN",enterprise_id:1,enterprise:"YHS",name:"연합시스템"}
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
        return this.loginService.monLogin(body);
    }

    
    @ApiOperation({ summary: '엣지 로그인' })
    @Post('/transmitter')
    async edgeInfo(
        @Body('transmitter') transmitter : string 
    ){
        return this.loginService.edgeInfo(transmitter);
    }

    @ApiOperation({ summary: '엣지 최초 등록된 물리장비인지 확인하는 api' })
    @Post('/edge_machine')
    async edgeMachine(
        @Body('machineId') machineId : string 
    ){
        console.log(machineId);
        return this.loginService.edgeMachine(machineId);
    }

}
