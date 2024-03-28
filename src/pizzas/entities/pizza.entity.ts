import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PizzaFlavor } from "../enum/PizzaFlavor";
import { Story } from "src/story/entities/story.entity";
import { Review } from "src/review/entities/review.entity";
import { Ingredient } from "src/ingredient/entities/ingredient.entity";

@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Story, story => story.pizza)
    story: Story

    @OneToMany(() => Review, review => review.pizza)
    reviews: Review[]

    @ManyToMany(() => Ingredient)
    @JoinTable()
    ingredients: Ingredient[]

    @Index({ unique: true })
    @Column({ length: 100 })
    name!: string;

    @Index()
    @Column({ type: "enum", enum: PizzaFlavor })
    flavor!: PizzaFlavor;

    @Column({ type: "timestamp", default: () => "current_timestamp" })
    created!: Date;

    @Column({ default: false })
    speciality!: boolean;

    @Column()
    price!: number;

    @Column({ nullable: true })
    end?: Date;


}
