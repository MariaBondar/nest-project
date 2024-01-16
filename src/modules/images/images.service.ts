import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImageDto } from 'src/dtos/images.dto';
import { NotFoundException } from 'src/exceptions/not-found.exception';
import { Image, User, Comment } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
    constructor(
        @InjectRepository(Image) private readonly imageRepository: Repository<Image>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Comment) private readonly commentRepository: Repository<Comment>,
    ) { }

    getImages() {
        return this.imageRepository.findAndCount();
    }

    async createImage(createImageDto: CreateImageDto) {
        const isUuid = createImageDto.userId.match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$");
        const userId = isUuid 
        ? this.userRepository.findOneOrFail({ where: { id: createImageDto.userId } }) 
        : null;

        if (!userId) {
            throw new NotFoundException("User");
        }

        const newImage = await this.imageRepository.create(createImageDto);
        return this.imageRepository.save(newImage);
    }

    findImagesById(id: string) {
        return this.imageRepository.findOneBy({ id });
    }

    async removeImage(id: string) {
        await this.commentRepository.delete({ userId: id });
        
        return this.imageRepository.delete(id);
    }
}
