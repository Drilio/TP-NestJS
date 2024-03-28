import { Pizza } from "src/pizzas/entities/pizza.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ length: 100 })
    name!: string;

    @ManyToMany(() => Pizza)
    pizzas: Pizza[]
}
