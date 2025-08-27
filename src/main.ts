import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,   // Remueve propiedades que no tienen decorators
      forbidNonWhitelisted: true, // Lanza un error si hay propiedades extras
      //transform: true, Transforma los tipos de las propiedades al tipo esperado (ej: string a number)   
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
