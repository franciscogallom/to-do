import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 'asd',
      description: 'tarea',
      completed: true,
    },
    {
      id: 'aaa',
      description: 'tarea2',
      completed: false,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: CreateTaskDto) {
    return task;
  }

  deleteTask(id: string): string {
    return `delete task with id ${id}!`;
  }

  updateTask(id: string): string {
    return `update task with id ${id}!`;
  }
}
