import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BaseEntity, Repository } from 'typeorm';
import { CreateCommonInput, UpdateCommonInput } from './common.input';
@Injectable()
export class CommonService<T extends BaseEntity> {
  constructor(private readonly _repository: Repository<T>) {}

  public async create(createCommonDto: CreateCommonInput) {
    return await this._repository.save<any>(createCommonDto);
  }

  public async findAll(): Promise<T[]> {
    return await this._repository.find();
  }

  public async findOne(id: number): Promise<T> {
    const data = await this._repository.findOne(id);

    if (!data)
      throw new NotFoundException(`No se encuetra el elemento con id ${id}`);

    return data;
  }

  public async update(updateEntityDto: UpdateCommonInput): Promise<T> {
    return await this._repository.save<any>(updateEntityDto);
  }

  public async remove(id: number): Promise<number> {
    await this.findOne(id);
    const data = (await this._repository.delete(id)).affected;
    if (!data)
      throw new BadRequestException(
        'Ha ocurrido un error al eliminar el elemento'
      );
    return id;
  }
}
