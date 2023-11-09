import { IsString, IsOptional, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class transmitterDTO{
    @ApiProperty({
        example:'transmitter(string)',
        description:'name(svc_edge)'
    })
    @IsNotEmpty()
    @IsString()
    public transmitter: string;
}