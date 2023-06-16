import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersServices {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}

  async create(email: string, password: string) {
    return await this.repo.save({ email, password });
  }

  async findOnde(id: number) {
    return await this.repo.findOne({ where: { id } });
  }

  async find(email: string) {
    return await this.repo.find({
      where: {
        email,
      },
    });
  }
}
