import { IsString, IsUrl, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsUrl()
  photoUrl: string;
}
