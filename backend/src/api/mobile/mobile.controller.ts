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
  public async addMobile(@Body() input: MobileInput): Promise<MobileEntity> {
    return this.mobileService.add(input);
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

  @Get(':mobileId')
  public async getProduct(
    @Param('mobileId') mobileId: string,
  ): Promise<MobileEntity> {
    return this.mobileService.get(mobileId);
  }
  */
}