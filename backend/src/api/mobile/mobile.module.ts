import { Module } from '@nestjs/common';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';
import { MobileRepository } from './mobile.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import MobileEntity from './entity/mobile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MobileEntity])],
  controllers: [MobileController],
  providers: [MobileService, MobileRepository],
  exports: [MobileService],
})
export class MobileModule { }
