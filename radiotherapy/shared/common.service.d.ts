import { BaseEntity, Repository } from 'typeorm';
import { CreateCommonInput, UpdateCommonInput } from './common.input';
export declare class CommonService<T extends BaseEntity> {
    private readonly _repository;
    constructor(_repository: Repository<T>);
    create(createCommonDto: CreateCommonInput): Promise<any>;
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T>;
    update(updateEntityDto: UpdateCommonInput): Promise<T>;
    remove(id: number): Promise<number>;
}
