"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunMigration1619793589935 = void 0;
class RunMigration1619793589935 {
    constructor() {
        this.name = 'RunMigration1619793589935';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `active` tinyint NOT NULL DEFAULT 1, `is_admin` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `patients` CHANGE `address` `address` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("DROP TABLE `users`");
    }
}
exports.RunMigration1619793589935 = RunMigration1619793589935;
//# sourceMappingURL=1619793589935-RunMigration.js.map