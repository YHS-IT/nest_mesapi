import { JwtService } from '@nestjs/jwt';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService:JwtService){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>{
    const request = context.switchToHttp().getRequest();
    const token = this.checkToken(request);
  
    if(!token){
        throw new UnauthorizedException();
    }
    try{
        const payload = await this.jwtService.verifyAsync(
            token,
            {
                secret: process.env.JWT_SECRET
            }
        ) 
        request['user'] = payload;    
    }catch{
      throw new UnauthorizedException();
    }
   
    return true ;
  }

  private checkToken(request:Request):string  | undefined {
    const token = request.headers['x-access-token'] ;
    if(Array.isArray(token)){ return token[0]; }
    return token ? token : undefined;
  }
 
}