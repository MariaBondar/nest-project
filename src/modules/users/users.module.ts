import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Image, Comment } from '../../typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Image, Comment]),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
