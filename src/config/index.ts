import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const PROJECT_PORT = 3002;

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'radiotherapy',
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/database/migrations/**/*.ts`],
  cli: {
    migrationsDir: `${__dirname}/database/migrations`,
  },
} as TypeOrmModuleOptions;
