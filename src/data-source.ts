import { DataSource, DataSourceOptions } from 'typeorm';
import UserEntity from './users/user.entity';
import ReportEntity from './reports/report.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'mycv',
  entities: [UserEntity, ReportEntity],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'custom_migration_table',
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
