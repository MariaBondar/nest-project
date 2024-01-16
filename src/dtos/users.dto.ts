import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsUUID, MinLength } from "class-validator";

export class CreateUserDto {
  @IsUUID()
  id!: string;

  @ApiProperty()
  @MinLength(3)
  username!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  photoUrl?: string;
}