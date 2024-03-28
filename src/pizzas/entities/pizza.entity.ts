import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PizzaFlavor } from "../enum/PizzaFlavor";
import { Recipe } from "src/recipe/entities/recipe.entity";

@Entity()
export class Pizza extends Recipe {

    @Index()
    @Column({ type: "enum", enum: PizzaFlavor })
    flavor!: PizzaFlavor;

}
