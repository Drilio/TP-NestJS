import { Module } from '@nestjs/common';
import { CalzoneService } from './calzone.service';
import { CalzoneController } from './calzone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from 'src/recipe/entities/recipe.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Review } from 'src/review/entities/review.entity';
import { Story } from 'src/story/entities/story.entity';
import { Calzone } from './entities/calzone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Recipe,
    Calzone,
    Ingredient,
    Review,
    Story,
  ])],
  controllers: [CalzoneController],
  providers: [CalzoneService],
})
export class CalzoneModule { }
