import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const KEY_SECRECT = 'Radiotherapy@2020*';
export const PROJECT_PORT = 3002;

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'radiotherapy',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'dist/database/migrations',
  },
} as TypeOrmModuleOptions;
