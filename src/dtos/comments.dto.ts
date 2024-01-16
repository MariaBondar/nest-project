import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateCommentDto {
    @IsUUID()
    id!: string;

    @ApiProperty()
    @IsString()
    userId!: string;

    @ApiProperty()
    @IsString()
    imageId!: string;

    @ApiProperty()
    @IsString()
    comment!: string;
}