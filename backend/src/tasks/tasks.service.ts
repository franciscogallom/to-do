import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Task } from './interfaces/Task';
import { CreateTaskDto } from './dto/create-task.dto';
import { EditTaskDto } from './dto/edit-task.dto';
import { Task as TaskEntity } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  getTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  addTask(task: CreateTaskDto): Promise<TaskEntity> {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  deleteTask(id: number): Promise<DeleteResult> {
    return this.taskRepository.delete(id);
  }

  async updateTask(id: string, task: EditTaskDto): Promise<TaskEntity> {
    const taskToEdit = await this.taskRepository.findOne(id);
    if (!taskToEdit) throw new NotFoundException('Task does not exist');
    const updatedTask = Object.assign(taskToEdit, task);
    return this.taskRepository.save(updatedTask);
  }
}
