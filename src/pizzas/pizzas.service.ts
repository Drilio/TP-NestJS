import { ConflictException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, QueryFailedError, Repository, TypeORMError } from 'typeorm';

@Injectable()
export class PizzasService {

  constructor(@InjectRepository(Pizza) private data: Repository<Pizza>) { }

  async create(dto: CreatePizzaDto): Promise<Pizza> {
    try {
      let done = await this.data.save(dto);
      return done;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new ConflictException("Cette Pizza existe déjà");
      }
    }
  }

  findAll(): Promise<Pizza[]> {
    return this.data.find();
  }

  findOne(id: number): Promise<Pizza> {
    return this.data.findOneBy({ id }).catch(e => {
      throw new NotFoundException(id)
    })
  }

  async update(id: number, dto: UpdatePizzaDto): Promise<Pizza> {
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
