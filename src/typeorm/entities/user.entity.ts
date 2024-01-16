import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from "./image.entity";
import { Comment } from "./comment.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;


  @Column({
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
  })
  photoUrl: string;

  @Column({
    name: 'email_address',
    nullable: false,
    unique: true,
  })
  email: string;

  @OneToMany(() => Image, image => image.user)
  images: Image[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];
}
