import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSpecialistTable1619640862725 implements MigrationInterface {
    name = 'CreateSpecialistTable1619640862725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `specialists` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `patients` DROP COLUMN `lastname`");
        await queryRunner.query("ALTER TABLE `patients` ADD `name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `patients` ADD `last_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD `speciaListId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_926325ad0f51112216e3c2cc8bd` FOREIGN KEY (`speciaListId`) REFERENCES `specialists`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_926325ad0f51112216e3c2cc8bd`");
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP COLUMN `speciaListId`");
        await queryRunner.query("ALTER TABLE `patients` DROP COLUMN `last_name`");
        await queryRunner.query("ALTER TABLE `patients` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `patients` ADD `lastname` varchar(255) NOT NULL");
        await queryRunner.query("DROP TABLE `specialists`");
    }

}
