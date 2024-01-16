import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/users.dto';
import { User, Image, Comment } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Image) private readonly imageRepository: Repository<Image>,
    @InjectRepository(Comment) private readonly commentRepository: Repository<Comment>,
  ) { }

  getUsers() {
    return this.userRepository.findAndCount();
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUsersById(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  async removeUser(userId: string) {
    await this.commentRepository.delete({ userId });
    await this.imageRepository.delete({ userId });

    return this.userRepository.delete({ id: userId });
  }
}
