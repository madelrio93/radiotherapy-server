"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_PORT = exports.KEY_SECRECT = void 0;
exports.KEY_SECRECT = 'Radiotherapy@2020*';
exports.PROJECT_PORT = 3002;
exports.default = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'hha',
    password: '@meijeiras2020*',
    database: 'radiotherapy',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/database/migrations/**/*.ts'],
    cli: {
        migrationsDir: 'dist/database/migrations',
    },
};
//# sourceMappingURL=index.js.map