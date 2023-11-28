import { Controller, Get, Param } from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Message')
@Controller('message')
export class MessageController {
    constructor(
        private messageService:MessageService,
    ){}

    @Get('/:code')
    async message(
        @Param('code') code: string
    ){
        console.log(code);
    }

}
