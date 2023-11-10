import { Controller, Get, Patch, UseGuards, Body, Delete, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { EdgeService } from './master.edge.service';

@Controller('/api/master/edge')
@ApiTags('BaroAdmin(Edge)')
@UseGuards(AuthGuard)

export class EdgeController {
    constructor(
        private edgeService:EdgeService
    ){}
// Edge
    @Get('/edge/list')
    async selectEdge(){

    }

    @Patch('/edge/update')
    async updateEdge(
        @Body() body
    ){

    }

    @Post('/edge/insert')
    async insertEdge(
        @Body() body
    ){
        console.log(body);
    }

    @Delete('/edge/delete/:id')
    async deleteEdge(
        @Param('id') id:number
    ){
        console.log(id);
    }

// // User
//     @Get('/user/list')
//     async selectUser(){

//     }

//     @Patch('/user/update')
//     async updateUser(
//         @Body() body
//     ){
//         console.log(body);
//     }

//     @Post('/user/insert')
//     async insertUser(
//         @Body() body
//     ){
//         console.log(body);
//     }

//     @Delete('/user/delete/:id')
//     async deleteUser(
//         @Param('id') id:number
//     ){
//         console.log(id);
//     }

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
