import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;
}
