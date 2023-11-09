import { IsString, IsOptional, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class MasterLoginDTO {
    @ApiProperty({
        example:'baro',
        description:'마스터 ID'
    })
    @IsNotEmpty()
    @IsString()
    public username: string;
    
    @ApiProperty({
        example:'string (password)',
        description:'마스터 PW'
    })
    @IsNotEmpty()
    @IsString()
    public password: string;
}