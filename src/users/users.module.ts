import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './user.entity';
import { UsersController } from './users.controller';
import { UsersServices } from './users.service';
import ReportEntity from 'src/reports/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ReportEntity])],
  controllers: [UsersController],
  providers: [UsersServices],
})
export class UsersModule {}
