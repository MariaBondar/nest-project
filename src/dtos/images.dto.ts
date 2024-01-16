import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateImageDto {
    @IsUUID()
    id!: string;

    @ApiProperty()
    @IsString()
    image!: string;

    @ApiProperty()
    @IsString()
    userId!: string;

    @ApiProperty()
    @IsString()
    imageName?: string;

    @ApiProperty()
    @IsString()
    imageTheme?: string;
}