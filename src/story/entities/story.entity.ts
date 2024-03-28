import { Pizza } from "src/pizzas/entities/pizza.entity";
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Story {

    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => Pizza)
    @JoinColumn()
    pizza: Pizza;

    @Column({ length: 500 })
    anecdote!: string;

    @Index()
    @Column({ length: 100 })
    city?: string;
}
