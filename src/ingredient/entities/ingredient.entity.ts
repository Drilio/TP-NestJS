import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ length: 100 })
    name!: string;

    @ManyToMany(() => Recipe, {
        cascade: true,
    })
    recipe: Recipe[]
}
