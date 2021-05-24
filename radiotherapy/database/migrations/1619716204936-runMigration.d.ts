import { MigrationInterface, QueryRunner } from "typeorm";
export declare class runMigration1619716204936 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
