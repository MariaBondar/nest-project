import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('id/:id')
    findUsersById(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.findUsersById(id);
    }

    @Post('create')
    createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Delete('id/:id')
    removeUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.removeUser(id);
    }
}