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
import { Task } from './interfaces/Task';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Post()
  addTask(@Body() task: CreateTaskDto) {
    return this.taskService.addTask(task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id) {
    return this.taskService.deleteTask(id);
  }

  @Put(':id')
  updateTask(@Param('id') id) {
    return this.taskService.updateTask(id);
  }
}
