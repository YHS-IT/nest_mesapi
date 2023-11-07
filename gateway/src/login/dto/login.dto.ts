import { IsString, IsOptional, IsNotEmpty } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class LoginDTO{
    @ApiProperty({
        example:'yhsadmin',
        description:'회사 ID'
    })
    @IsNotEmpty()
    @IsString()
    public username: string;
    
    @ApiProperty({
        example:'03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4',
        description:'회사 PW'
    })
    @IsNotEmpty()
    @IsString()
    public password: string;

    @ApiProperty({
        example:'mon1',
        description:'monitor name'
      })
    @IsString()
    @IsOptional() // id는 선택적으로 사용할 수 있음
    public monitor: string;
}