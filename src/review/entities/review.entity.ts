import { Pizza } from "src/pizzas/entities/pizza.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    name!: string;

    @ManyToOne(() => Pizza, pizza => pizza.reviews)
    pizza: Pizza;
}
