import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from 'src/dtos/comments.dto';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) { }

    @Get()
    getComments() {
        return this.commentService.getComments();
    }

    @Get('id/:id')
    findCommentsById(@Param('id', ParseUUIDPipe) id: string) {
        return this.commentService.findCommentsById(id);
    }

    @Post('create')
    createComments(@Body() createCommentDto: CreateCommentDto) {
        return this.commentService.createComment(createCommentDto);
    }

    @Delete('id/:id')
    removeUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.commentService.removeComment(id);
    }
}