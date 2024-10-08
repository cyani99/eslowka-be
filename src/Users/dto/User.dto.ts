import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IFolder, ISettings } from 'src/schemas/types';

export class CreateUserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  uid: string;

  @IsString()
  userName: string;

  @IsString()
  email: string;

  folders?: IFolder[];

  settings: ISettings;

  experience: number;

  level: number;

  streak: number;

  joined: Date;

  lastLogin: Date;

  practiceDate: Date;
}
