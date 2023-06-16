import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersServices } from './users.service';

@Controller('/auth')
export class UsersController {
  constructor(private usersServices: UsersServices) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersServices.create(body.email, body.password);
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersServices.find(email);
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.usersServices.findOnde(Number(id));
  }
}
