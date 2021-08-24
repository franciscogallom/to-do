import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { EditTaskDto } from './dto/edit-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  async getTasks() {
    const tasks = await this.taskService.getTasks();
    return tasks;
  }

  @Post()
  async addTask(@Body() task: CreateTaskDto) {
    const newTask = await this.taskService.addTask(task);
    return newTask;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id) {
    const { affected } = await this.taskService.deleteTask(id);
    return affected;
  }

  @Put(':id')
  async updateTask(@Param('id') id, @Body() task: EditTaskDto) {
    const updatedTask = await this.taskService.updateTask(id, task);
    return updatedTask;
  }
}
