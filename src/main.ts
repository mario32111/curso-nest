import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //crea la app
  const app = await NestFactory.create(AppModule);
  //escucha en el puerto 3000 en caso de que sea diferente se toma el puerto del archivo .env
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
