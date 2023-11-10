import { Controller, Get, Patch, UseGuards, Body, Delete, Param, Post } from '@nestjs/common';
import { EnterpriseService } from './master.enterprise.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/api/master/enterprise')
@ApiTags('BaroAdmin(Enterprise)')
@UseGuards(AuthGuard)

export class EnterpriseController {
    constructor(
        private enterpriseService:EnterpriseService
    ){}

    // Enterprise
    @ApiOperation({summary:'회사리스트를 전부 불러오는 api'})
    @Get('/list')
    async list(){
       return await this.enterpriseService.list();
    }

    @Patch('/update')
    async updateEnterprise(
        @Body() body
    ){
        return await this.enterpriseService.updateEnterprise(body);
    }
    
    @Post('/insert')
    async insertEnterprise(
        @Body() body
    ){
        console.log(body);
    }

    @Delete('/delete/:id')
    async deleteEnterprise(
        @Param('id') id :number
    ){
        console.log(id,typeof id);
    }

}
