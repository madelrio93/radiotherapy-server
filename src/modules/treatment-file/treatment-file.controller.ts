import { Controller, Get, Res } from '@nestjs/common';
import { Public } from 'src/decorators';
import { TreatmentFileService } from './treatment-file.service';

@Controller('t')
export class TreatmentFileController {
  constructor(private readonly _treatmentFileService: TreatmentFileService) {}
  @Public()
  @Get('/pdf')
  async getTreatmentFilePDF(@Res() res: any) {
    const buffer = await this._treatmentFileService.getPDF();

    res.end(buffer);
  }
}
