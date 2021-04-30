import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, BeforeUpdate, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

import { USERS } from '../../../constants';
import { Person } from '../../../shared';

@ObjectType()
@Entity(USERS)
export class User extends Person {
  @Field()
  @Column()
  username: string;

  @Field()
  @Column({ select: false })
  password: string;

  @Field()
  @Column({ default: true })
  active: boolean;

  @Field()
  @Column({ name: 'is_admin', default: false })
  isAdmin: boolean;

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
