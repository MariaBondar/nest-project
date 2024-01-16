import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Comment } from "./comment.entity"
import { IsUUID } from 'class-validator';

@Entity("images")
export class Image {

    @PrimaryGeneratedColumn("uuid")
    @IsUUID()
    id: string;

    @Column({
        type: 'uuid'
    })
    userId: string;

    @ManyToOne(() => User, user => user.images, {
        nullable: false
    })
    user: User;

    @OneToMany(() => Comment, comment => comment.image)
    comments: Comment;

    @Column({
        nullable: false,
    })
    image: string;

    @Column()
    imageName: string;

    @Column()
    imageTheme: string;
}
