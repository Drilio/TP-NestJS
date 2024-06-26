import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Review } from 'src/review/entities/review.entity';
import { Story } from 'src/story/entities/story.entity';
import { Calzone } from 'src/calzone/entities/calzone.entity';
import { Recipe } from 'src/recipe/entities/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Recipe,
    Pizza,
    Calzone,
    Ingredient,
    Review,
    Story,
  ])],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule { }
