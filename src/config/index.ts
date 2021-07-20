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
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
} as TypeOrmModuleOptions;
