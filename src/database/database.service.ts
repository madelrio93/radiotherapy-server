import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../config';

export default TypeOrmModule.forRoot(databaseConfig);
