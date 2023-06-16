import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { dataSourceOptions } from './data-source';
// import UserEntity from './users/user.entity';
// import ReportEntity from './reports/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,

    ReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
