import { Person } from '../../../shared';
export declare class User extends Person {
    username: string;
    password: string;
    active: boolean;
    isAdmin: boolean;
    hashPassword(): Promise<void>;
}
