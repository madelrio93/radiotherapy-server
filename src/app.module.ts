import { Module } from '@nestjs/common';
import { TreatmentFileModule } from './modules/treatment-file/treatment-file.module';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    TreatmentFileModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: join(process.cwd(), `src/schema.gql`),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
