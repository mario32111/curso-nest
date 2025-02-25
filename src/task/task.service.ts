import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TaskService {
    tasks: ITask[] = [];
    create(taskDTO: TaskDTO) : ITask{
        const task = {
            id: uuidv4(),
            ...taskDTO
        };
        this.tasks.push(task);
        return task;
    }
    findAll(): ITask[] {
        return this.tasks;
    }

    findOne(id: string): ITask {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }

    update(id: string, taskDTO: TaskDTO): ITask {
        const task = this.findOne(id);
        task.description = taskDTO.description;
        task.isDone = taskDTO.isDone;
        return task;
    }

    remove(id: string): ITask {
        const task = this.findOne(id);
        this.tasks = this.tasks.filter(task => task.id !== id);
        return task;
    }
    
}
