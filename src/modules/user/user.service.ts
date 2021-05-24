import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>
  ) {}

  public async create(createUserInput: CreateUserInput) {
    const username = await this.findByUsername(createUserInput.username);
    if (username)
      throw new BadRequestException(
        'El nombre de usuario introducido ya existe'
      );
    const newUser = this._userRepository.create(createUserInput);
    return await this._userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this._userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this._userRepository.findOne(id);
    if (this.isUser(user)) return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = this._userRepository.create(updateUserInput);
    const userUpdated = (await this._userRepository.update(id, user)).affected;
    if (!userUpdated)
      throw new BadRequestException(
        'Ha ocurrido un error al modificar el usuario'
      );
    return await this.findOne(id);
  }

  async remove(id: number) {
    const userDeteled = (await this._userRepository.delete(id)).affected;
    if (!userDeteled)
      throw new BadRequestException(
        'Ha ocurrido un error al eliminar el usuario'
      );
    return id;
  }

  public async findByUsername(username: string) {
    return await this._userRepository
      .createQueryBuilder('users')
      .where({
        username,
      })
      .addSelect('users.password')
      .getOne();
  }

  private isUser(user: User) {
    if (!user) throw new NotFoundException('No se encuentra el usuario');
    return true;
  }
}
