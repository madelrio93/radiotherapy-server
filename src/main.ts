import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PROJECT_PORT } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PROJECT_PORT);

  console.log(
    '---------------------------------------------------------------------------'
  );
  console.log(
    `     ----------Starting radiotherapy api server in port ${PROJECT_PORT}----------`
  );
  console.log(
    '---------------------------------------------------------------------------'
  );
}
bootstrap();
