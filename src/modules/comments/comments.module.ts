import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment, Image } from 'src/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Comment, Image])],
    controllers: [CommentsController],
    providers: [CommentsService]
})
export class CommentsModule { }