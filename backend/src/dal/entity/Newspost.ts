import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserEntity } from "./User";
 
@Entity()
class Newspost {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    text: string;

    @Column()
    isPrivate: boolean
    
    @Column({ default: 'Other' })
    genre: 'Politic' | 'Business' | 'Sport' | 'Other';

    @Column({ type: 'timestamptz', nullable: true }) 
    createdAt: Date;
    
    // @Column({type:'boolean', default:false})
    // deleted = false

    @ManyToOne(() => UserEntity, (author) => author.newsposts)
    author: UserEntity;
}
  
export {Newspost as NewspostEntity}