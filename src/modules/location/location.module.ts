import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocationService } from './location.service';
import { LocationResolver } from './location.resolver';
import { Location } from './entities/location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationResolver, LocationService],
  exports: [TypeOrmModule.forFeature([Location])],
})
export class LocationModule {}
