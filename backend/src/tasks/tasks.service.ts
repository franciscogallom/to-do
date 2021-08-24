import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './interfaces/Task';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task as TaskEntity } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
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
