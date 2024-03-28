import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalzoneService } from './calzone.service';
import { CreateCalzoneDto } from './dto/create-calzone.dto';
import { UpdateCalzoneDto } from './dto/update-calzone.dto';

@Controller('calzone')
export class CalzoneController {
  constructor(private readonly calzoneService: CalzoneService) {}

  @Post()
  create(@Body() createCalzoneDto: CreateCalzoneDto) {
    return this.calzoneService.create(createCalzoneDto);
  }

  @Get()
  findAll() {
    return this.calzoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calzoneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalzoneDto: UpdateCalzoneDto) {
    return this.calzoneService.update(+id, updateCalzoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calzoneService.remove(+id);
  }
}
