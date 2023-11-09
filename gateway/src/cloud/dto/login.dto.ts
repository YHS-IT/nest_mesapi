import { IsString, IsOptional, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class EnterpriseDTO {
    @ApiProperty({
        example:'YHS_CLOUD',
        description:'엣지이름 (svc_edge)'
    })
    @IsNotEmpty()
    @IsString()
    public transmitter: string;
    
    @ApiProperty({
        example:'YHS',
        description:'회사이름 (svc_enterprise)'
    })
    @IsNotEmpty()
    @IsString()
    public enterprise: string;

}