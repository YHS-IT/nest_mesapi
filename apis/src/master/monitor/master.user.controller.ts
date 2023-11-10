import { Controller, Get, Patch, UseGuards, Body, Delete, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { MonitorService } from './master.user.service';

@Controller('/api/master/monitor')
@ApiTags('BaroAdmin(Monitor)')
@UseGuards(AuthGuard)

export class MonitorController {
    constructor(
        private userService:MonitorService
    ){}
// User
    @Get('/list')
    async selectUser(){

    }

    @Patch('/update')
    async updateUser(
        @Body() body
    ){
        console.log(body);
    }

    @Post('/insert')
    async insertUser(
        @Body() body
    ){
        console.log(body);
    }

    @Delete('/delete/:id')
    async deleteUser(
        @Param('id') id:number
    ){
        console.log(id);
    }

// // Monitor
//     @Get('/monitor/list')
//     async selectMonitor(

//     ){

//     }

//     @Get('/monitor/list_item')
//     async listItem(

//     ){

//     }

//     @Get('/monitor/all_cnc_list')
//     async allCncList(
        
//     ){

//     }

//     @Patch()
//     async updateMonitor(
//         @Body() body
//     ){
//         console.log(body);
//     }

//     @Post('/monitor/insert')
//     async insertMonitor(
//         @Body() body
//     ){
//         console.log(body);
//     }

//     @Delete('/monitor/delete/:id')
//     async deleteMonirot(
//         @Param('id') id:number
//     ){
//         console.log(id);
//     }






}
