import {MigrationInterface, QueryRunner} from "typeorm";

export class TreatmententityStatus1619027010621 implements MigrationInterface {
    name = 'TreatmententityStatus1619027010621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `treatments-files` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `treatments-files` ADD `status` enum ('no tratado', 'tratado', 'en equipo') NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `treatments-files` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `treatments-files` ADD `status` varchar(255) NOT NULL");
    }

}
