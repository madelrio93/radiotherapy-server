import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const KEY_SECRECT = 'Radiotherapy@2020*';
export const PROJECT_PORT = 3002;

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'hha',
  password: '@meijeiras2020*',
  database: 'radiotherapy',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
} as TypeOrmModuleOptions;
