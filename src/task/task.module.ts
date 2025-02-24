import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
      imports: [TaskModule],
      //estos son los modulos encargados de intaractuar con la bd (creo que es con un orm)
      controllers: [TaskController],
      //aqui van todos los servicios
      providers: [TaskService],
})
export class TaskModule {}
