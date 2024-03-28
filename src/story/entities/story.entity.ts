import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Story {

    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => Recipe)
    @JoinColumn()
    recipe: Recipe;

    @Column({ length: 500 })
    anecdote!: string;

    @Index()
    @Column({ length: 100 })
    city?: string;
}
