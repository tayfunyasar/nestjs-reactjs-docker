import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import MobileDto from './dto/mobile.dto';
import { MobileService } from './mobile.service';
import MobileEntity from './entity/mobile.entity';
import MobileInput from './input/mobile.input';

@Controller("api/mobile")
export class MobileController {
  constructor(private readonly mobileService: MobileService) {
  }

  @Post()
  public async add(@Body() input: MobileInput): Promise<MobileEntity> {
    return this.mobileService.add(input);
  }

  @Get(':id')
  public async getById(
    @Param('id') mobileId: number,
  ): Promise<MobileEntity> {
    return this.mobileService.getById(mobileId);
  }

  @Get()
  public async getAll(): Promise<MobileEntity[]> {
    return this.mobileService.get();
  }

  /*
  @Put(':mobileId')
  public async updateProduct(
    @Param('mobileId') mobileId: string,
    @Body() input: MobileInput,
  ): Promise<MobileEntity> {
    return this.mobileService.update(mobileId, input);
  } 

  @Delete(':mobileId')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteProduct(@Param('mobileId') mobileId: string) {
    await this.mobileService.delete(mobileId);
  }
  */
}