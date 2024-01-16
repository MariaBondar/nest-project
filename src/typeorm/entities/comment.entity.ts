import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from './image.entity';
import { User } from './user.entity';
import { IsUUID } from 'class-validator';

@Entity("comments")
export class Comment {
    @PrimaryGeneratedColumn("uuid")
    @IsUUID()
    id: string;

    @ManyToOne(() => User, user => user.comments, {
        nullable: false
    })
    user: User;

    @Column({
        type: 'uuid'
    })
    userId: string;

    @ManyToOne(() => Image, image => image.comments, {
        nullable: false
    })
    image: Image;

    @Column({
        type: 'uuid'
    })
    imageId: string;

    @Column({
        nullable: false,
    })
    comment: string;
}