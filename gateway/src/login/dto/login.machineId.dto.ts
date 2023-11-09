import { IsString, IsOptional, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class machineIdDTO{
    @ApiProperty({
        example:'machineId(string)',
        description:'mid(svc_edgemachine)'
    })
    @IsNotEmpty()
    @IsString()
    public machineId: string;
}