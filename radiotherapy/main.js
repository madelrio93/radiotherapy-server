"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(config_1.PROJECT_PORT);
    console.log('---------------------------------------------------------------------------');
    console.log(`     ----------Starting radiotherapy api server in port ${config_1.PROJECT_PORT}----------`);
    console.log('---------------------------------------------------------------------------');
}
bootstrap();
//# sourceMappingURL=main.js.map