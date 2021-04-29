import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseEntity, Repository } from 'typeorm';

@Injectable()
export class CommonService<T extends BaseEntity> {
  constructor(private readonly _repository: Repository<T>) {}

  public async create(entity: any) {
    return await this._repository.save(entity);
  }

  public async findAll() {
    return await this._repository.find();
  }

  public async findOne(id: number) {
    const entity = await this._repository.findOne(id);

    if (!entity) throw new NotFoundException();

    return entity;
  }

  public async update(updateEntityDto: any) {
    const { id } = updateEntityDto;
    return (await this._repository.update(id, { ...updateEntityDto })).affected;
  }

  public async remove(id: number) {
    return (await this._repository.delete(id)).affected;
  }
}
