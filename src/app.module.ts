import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
 //este es el achivo principal de la aplicacion
@Module({
  imports: [TaskModule],
  //estos son los modulos encargados de intaractuar con la bd (creo que es con un orm)
  controllers: [AppController],
  //aqui van todos los servicios
  providers: [AppService],
})
export class AppModule {}
