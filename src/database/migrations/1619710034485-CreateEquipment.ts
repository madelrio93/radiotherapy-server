import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEquipment1619710034485 implements MigrationInterface {
    name = 'CreateEquipment1619710034485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `patients` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `clinic` varchar(255) NOT NULL, `age` int NOT NULL, `sex` enum ('Femenino', 'Masculino') NOT NULL, `phone` int NOT NULL, `municipality` varchar(255) NOT NULL, `province` varchar(255) NOT NULL, `address` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `specialists` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `treatments_files` (`id` int NOT NULL AUTO_INCREMENT, `create_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `consultationDate` date NOT NULL, `status` enum ('no tratado', 'tratado', 'en equipo') NOT NULL, `patientId` int NOT NULL, `speciaListId` int NOT NULL, `equipmentId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `equipments` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_1d36ce0af47620dfe166f351dfe` FOREIGN KEY (`patientId`) REFERENCES `patients`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_926325ad0f51112216e3c2cc8bd` FOREIGN KEY (`speciaListId`) REFERENCES `specialists`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_dea5c879ffa3dcc18354d50878c` FOREIGN KEY (`equipmentId`) REFERENCES `equipments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_dea5c879ffa3dcc18354d50878c`");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_926325ad0f51112216e3c2cc8bd`");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_1d36ce0af47620dfe166f351dfe`");
        await queryRunner.query("DROP TABLE `equipments`");
        await queryRunner.query("DROP TABLE `treatments_files`");
        await queryRunner.query("DROP TABLE `specialists`");
        await queryRunner.query("DROP TABLE `patients`");
    }

}
