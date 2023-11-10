import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { httpFilter } from './lib/httpFilter';


async function bootstrap() {
  let port = process.env.PORT || 3095;
  const app = await NestFactory.create(AppModule,{ cors:true });


  app.useGlobalFilters(new httpFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('ApisApi')
    .setDescription('GateWayApi Swagger')
    .setVersion('1.0')
    .addApiKey(
      {
        type:'apiKey',
        name:'x-access-token',
        in:'header'
      },
      'x-access-token'
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document,{
    customSiteTitle:'ApisApi',
  });
  await app.listen(port,()=>{
    console.log(`open PORT : ${port}`)
  });
}
bootstrap();
