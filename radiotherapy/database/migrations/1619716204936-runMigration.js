"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMigration1619716204936 = void 0;
class runMigration1619716204936 {
    constructor() {
        this.name = 'runMigration1619716204936';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `patients` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `clinic` varchar(255) NOT NULL, `age` int NOT NULL, `sex` enum ('Femenino', 'Masculino') NOT NULL, `phone` int NOT NULL, `municipality` varchar(255) NOT NULL, `province` varchar(255) NOT NULL, `address` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `specialists` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `locations` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `origins` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `stages` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `treatments_files` (`id` int NOT NULL AUTO_INCREMENT, `create_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `consultationDate` date NOT NULL, `status` enum ('no tratado', 'tratado', 'en equipo') NOT NULL, `patientId` int NOT NULL, `speciaListId` int NOT NULL, `equipmentId` int NOT NULL, `locationId` int NOT NULL, `originId` int NOT NULL, `stageId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `equipments` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_1d36ce0af47620dfe166f351dfe` FOREIGN KEY (`patientId`) REFERENCES `patients`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_926325ad0f51112216e3c2cc8bd` FOREIGN KEY (`speciaListId`) REFERENCES `specialists`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_dea5c879ffa3dcc18354d50878c` FOREIGN KEY (`equipmentId`) REFERENCES `equipments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_f027d8764431995226919e081a7` FOREIGN KEY (`locationId`) REFERENCES `locations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_d3f46f5e1b7fb83f5b1cbf9f5fb` FOREIGN KEY (`originId`) REFERENCES `origins`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `treatments_files` ADD CONSTRAINT `FK_cbe0ed9d72494ea82054811cb23` FOREIGN KEY (`stageId`) REFERENCES `stages`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_cbe0ed9d72494ea82054811cb23`");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_d3f46f5e1b7fb83f5b1cbf9f5fb`");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_f027d8764431995226919e081a7`");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_dea5c879ffa3dcc18354d50878c`");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_926325ad0f51112216e3c2cc8bd`");
        await queryRunner.query("ALTER TABLE `treatments_files` DROP FOREIGN KEY `FK_1d36ce0af47620dfe166f351dfe`");
        await queryRunner.query("DROP TABLE `equipments`");
        await queryRunner.query("DROP TABLE `treatments_files`");
        await queryRunner.query("DROP TABLE `stages`");
        await queryRunner.query("DROP TABLE `origins`");
        await queryRunner.query("DROP TABLE `locations`");
        await queryRunner.query("DROP TABLE `specialists`");
        await queryRunner.query("DROP TABLE `patients`");
    }
}
exports.runMigration1619716204936 = runMigration1619716204936;
//# sourceMappingURL=1619716204936-runMigration.js.map