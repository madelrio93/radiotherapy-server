import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreatmentFileModule } from './modules/treatment-file/treatment-file.module';
import { DatabaseModule } from './database/database.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TreatmentFileModule, DatabaseModule],
})
export class AppModule {}
