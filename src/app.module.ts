import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { DatabaseModule } from './database/database.module';
import { StatisticsModule } from './modules/statistics';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    StatisticsModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: join(process.cwd(), `src/schema.gql`),
      sortSchema: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
