import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreatmentFileModule } from './modules/treatment-file/treatment-file.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TreatmentFileModule],
})
export class AppModule {}
