import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { DatabaseModule } from './database/database.module';
import { StatisticsModule } from './modules/statistics';

@Module({
  imports: [
    StatisticsModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: join(process.cwd(), `src/schema.gql`),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
