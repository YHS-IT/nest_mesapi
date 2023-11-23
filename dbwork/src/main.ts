import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { httpFilter } from './lib/httpFilter';
import { ValidationPipe } from '@nestjs/common';
import { subscribeCNC } from './lib/pubsub';


async function bootstrap() {
  let port = 3095;
  const app = await NestFactory.create(AppModule,{ cors:true });
  
  app.useGlobalFilters(new httpFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true,
    })
  )
  subscribeCNC("yhs_data","yhs_data_cloud_dbwork_test")
  await app.listen(port,()=>{
    console.log(`open PORT : ${port}`)
  });
}
bootstrap();
