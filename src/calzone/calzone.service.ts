import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalzoneDto } from './dto/create-calzone.dto';
import { UpdateCalzoneDto } from './dto/update-calzone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Calzone } from './entities/calzone.entity';
import { DeleteResult, QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class CalzoneService {

  constructor(@InjectRepository(Calzone) private data: Repository<Calzone>) { }

  async create(dto: CreateCalzoneDto): Promise<Calzone> {
    try {
      let done = await this.data.save(dto);
      return done;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new ConflictException("Cette Pizza existe déjà");
      }
    }
  }

  findAll(): Promise<Calzone[]> {
    return this.data.find();
  }

  findOne(id: number): Promise<Calzone> {
    return this.data.findOneBy({ id }).catch(e => {
      throw new NotFoundException(id)
    })
  }

  async update(id: number, dto: UpdateCalzoneDto): Promise<Calzone> {
    let done = await this.data.update(id, dto);
    if (done.affected != 1)
      throw new NotFoundException(id)
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    let done: DeleteResult = await this.data.delete(id);
    if (done.affected != 1)
      throw new NotFoundException(id)
  }
}
