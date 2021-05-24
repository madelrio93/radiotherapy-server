import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RunMigration1619793589935 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
