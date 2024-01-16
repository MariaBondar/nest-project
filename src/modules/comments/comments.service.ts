import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from 'src/dtos/comments.dto';
import { NotFoundException } from 'src/exceptions/not-found.exception';
import { Comment, Image } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment) private readonly commentRepository: Repository<Comment>,
        @InjectRepository(Image) private readonly imageRepository: Repository<Image>,
    ) { }

    getComments() {
        return this.commentRepository.findAndCount();
    }

    async createComment(createCommentDto: CreateCommentDto) {
        const regex = "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$";

        const isUuid = createCommentDto.imageId.match(regex)
            && createCommentDto.userId.match(regex);
        const imageId = isUuid
            ? this.imageRepository.findOneOrFail({ where: { id: createCommentDto.imageId } })
            : null;

        if (!imageId) {
            throw new NotFoundException("Image or User");
        }

        const newComment = await this.commentRepository.create(createCommentDto);
        return this.commentRepository.save(newComment);
    }

    findCommentsById(id: string) {
        return this.commentRepository.findOneBy({ id });
    }

    removeComment(id: string) {
        return this.commentRepository.delete(id);
    }
}