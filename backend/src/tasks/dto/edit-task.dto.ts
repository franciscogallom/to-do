import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class EditTaskDto extends PartialType(CreateTaskDto) {}
