import {MigrationInterface, QueryRunner} from "typeorm";

export class treatmentsFilesEntity1619024510626 implements MigrationInterface {
    name = 'treatmentsFilesEntity1619024510626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `treatments-files` (`id` int NOT NULL AUTO_INCREMENT, `status` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `treatments-files`");
    }

}
