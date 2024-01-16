import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/typeorm';
import { ImagesModule } from 'src/modules/images/images.module';
import { CommentsModule } from 'src/modules/comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ImagesModule,
    CommentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
