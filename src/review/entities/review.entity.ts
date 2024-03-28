import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    name!: string;

    @ManyToOne(() => Recipe, recipe => recipe.reviews)
    recipe: Recipe;
}
