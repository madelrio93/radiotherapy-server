import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLocation1619713388951 implements MigrationInterface {
    name = 'CreateLocation1619713388951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `locations` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD `locationId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_f027d8764431995226919e081a7` FOREIGN KEY (`locationId`) REFERENCES `locations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_f027d8764431995226919e081a7`");
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP COLUMN `locationId`");
        await queryRunner.query("DROP TABLE `locations`");
    }

}
