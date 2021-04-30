import {MigrationInterface, QueryRunner} from "typeorm";

export class RunMigration1619793589935 implements MigrationInterface {
    name = 'RunMigration1619793589935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `active` tinyint NOT NULL DEFAULT 1, `is_admin` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("DROP TABLE `users`");
    }

}
