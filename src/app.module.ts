import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreatmentFileModule } from './modules/treatment-file/treatment-file.module';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TreatmentFileModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: join(process.cwd(), `${__dirname}/schema.gql`),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
