import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; import { Repository } from 'typeorm';
import MobileEntity from './entity/mobile.entity';

@Injectable()
export class MobileRepository {
  constructor(
    @InjectRepository(MobileEntity) private readonly mobileRepository: Repository<MobileEntity>,
  ) {
  }

  async add(entity: MobileEntity): Promise<MobileEntity> {
    console.log('saving %d', entity);
    return this.mobileRepository.save(entity);
  }

  async findAll(): Promise<MobileEntity[]> {
    return this.mobileRepository.find();
  }

  async findById(id: number): Promise<MobileEntity> {
    return this.mobileRepository.findOne(id);
  }
}