import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSpecialistInput } from './dto/create-specialist.input';
import { UpdateSpecialistInput } from './dto/update-specialist.input';
import { Specialist } from './entities/specialist.entity';

@Injectable()
export class SpecialistService {
  constructor(
    @InjectRepository(Specialist)
    private readonly _specialistRepository: Repository<Specialist>
  ) {}

  public async findAll(): Promise<Specialist[]> {
    return await this._specialistRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  public async findOne(id: number) {
    const specialist = await this._specialistRepository.findOne(id);
    if (!specialist)
      throw new NotFoundException(
        `No se encuetra el especialista con id ${id}`
      );
    return specialist;
  }

  public async create(createSpecialistInput: CreateSpecialistInput) {
    return await this._specialistRepository.save(createSpecialistInput);
  }

  public async update(
    updateSpecialistInput: UpdateSpecialistInput
  ): Promise<Specialist> {
    return await this._specialistRepository.save({
      ...updateSpecialistInput,
    });
  }

  public async remove(id: number): Promise<number> {
    await this.findOne(id);
    const specialistDeleted = (await this._specialistRepository.delete(id))
      .affected;
    if (!specialistDeleted)
      throw new BadRequestException(
        'Ha ocurrido un error al eliminar el elemento'
      );
    return id;
  }
}
