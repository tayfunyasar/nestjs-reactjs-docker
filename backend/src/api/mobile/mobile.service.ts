import { Injectable } from '@nestjs/common';
import MobileEntity from './entity/mobile.entity';
import { MobileRepository } from './mobile.repository';
import MobileDto from './dto/mobile.dto';
import { MobileEntityBuilder } from './builder/mobile.builder';

@Injectable()
export class MobileService {
  constructor(private readonly mobileRepository: MobileRepository) { }

  async add(request: MobileDto): Promise<MobileEntity> {
    const mobileEntity: MobileEntity = new MobileEntityBuilder()
      .name(request.name)
      .picture(request.picture)
      .description(request.description)
      .build();

    return this.mobileRepository.add(mobileEntity);
  }

  async get(): Promise<MobileEntity[]> {
    return this.mobileRepository.findAll();
  }

  async getById(id: number) {
    return this.mobileRepository.findById(id);
  }

}
