import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Calzone extends Recipe {

    @Column()
    xl!: boolean
}
