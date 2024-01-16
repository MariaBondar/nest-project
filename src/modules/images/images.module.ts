import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image, User, Comment } from 'src/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Image, User, Comment])],
    controllers: [ImagesController],
    providers: [ImagesService]
})
export class ImagesModule { }