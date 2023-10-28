import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToMany } from "typeorm"
import { NewspostEntity } from "./Newspost";

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    email: string

    @Column()
    password: string

    // @Column({type:'boolean', default:false})
    // deleted = false

    @OneToMany(() => NewspostEntity, (newspost) => newspost.author)
    newsposts: NewspostEntity[];
}

export {User as UserEntity}