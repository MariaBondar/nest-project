import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from 'src/dtos/images.dto';

@Controller('images')
export class ImagesController {
    constructor(private readonly imageService: ImagesService) { }

    @Get()
    getUsers() {
        return this.imageService.getImages();
    }

    @Get('id/:id')
    findUsersById(@Param('id', ParseUUIDPipe) id: string) {
        return this.imageService.findImagesById(id);
    }

    @Post('create')
    createUsers(@Body() createImageDto: CreateImageDto) {
        return this.imageService.createImage(createImageDto);
    }

    @Delete('id/:id')
    removeUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.imageService.removeImage(id);
    }
}