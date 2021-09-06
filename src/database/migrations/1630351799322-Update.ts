import {MigrationInterface, QueryRunner} from "typeorm";

export class Update1630351799322 implements MigrationInterface {
    name = 'Update1630351799322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_1d36ce0af47620dfe166f351dfe`");
        await queryRunner.query("ALTER TABLE `treatments_files` CHANGE `patientId` `patientId` int NULL");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_1d36ce0af47620dfe166f351dfe` FOREIGN KEY (`patientId`) REFERENCES `patients`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_1d36ce0af47620dfe166f351dfe`");
        await queryRunner.query("ALTER TABLE `treatments_files` CHANGE `patientId` `patientId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_1d36ce0af47620dfe166f351dfe` FOREIGN KEY (`patientId`) REFERENCES `patients`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL DEFAULT 'NULL'");
    }

}
