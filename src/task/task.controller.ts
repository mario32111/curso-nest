import { Controller, Get, Post, Req, Put, Patch, Delete, Param, Query, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    //peticion post con servicios, interfaces y dto 
    //ejemplo de como se puede hacer un post con un body con los datos que se necesitan
    @Post('t6')
    //para que esto funcione se debe especificar que el id viene dentro de param
    createTask6(@Body() taskDTO: TaskDTO) {
        return this.taskService.create(taskDTO);
    }
    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param  ('id') id: string) {
        return this.taskService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
        return this.taskService.update(id, taskDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.taskService.remove(id);
    }



    //peticion con validacion
    @Post('t7')
    //para que esto funcione se debe especificar que el id viene dentro de param
    createTask7(@Body() taskDTO: TaskDTO) {
        return this.taskService.create(taskDTO);
    }









    //ejemplos
    @Post('t1/:id/description/:description/isDone/:isDone')
    //para que esto funcione se debe especificar que el id viene dentro de param
    //dentro de los parametros se puede especificar el tipo de dato que se espera
    createTask2(@Param() param: any) {
        return param;
    }

    @Post('t2/:id/description/:description/isDone/:isDone')
    //para que esto funcione se debe especificar que el id viene dentro de param
    createTask(@Param('id') id: number, @Param('description') description: string, @Param('isDone') isDone: boolean) {
        return { id, description, isDone };
    }

    //esto es lo mismo pero con query paramms
    @Post('t3')
    //para que esto funcione se debe especificar que el id viene dentro de param
    createTask3(@Query('id') id: number, @Query('description') description: string, @Query('isDone') isDone: boolean) {
        return { id, description, isDone };
    }

    //esta version es para cuando no se especifica el nombre del query param ni la cantidad de parametros
    @Post('t4')
    //para que esto funcione se debe especificar que el id viene dentro de param
    createTask4(@Query() param: any) {
        return { param };
    }

    //esto es con parametros en el body
    @Post('t5')
    //para que esto funcione se debe especificar que el id viene dentro de param
    createTask5(@Body() body: any) {
        return { body };
    }



    //el done es para poner la ruta de dicho endpoint
    @Get('done')
    getTasks(@Req() req: Request) {
        return `method ${req.method}`;
    }

    @Put()
    putTasks(@Req() req: Request) {
        return `method ${req.method}`;
    }

    @Patch()
    patchTasks(@Req() req: Request) {
        return `method ${req.method}`;
    }

    @Delete()
    deleteTasks(@Req() req: Request) {
        return `method ${req.method}`;
    }
}
