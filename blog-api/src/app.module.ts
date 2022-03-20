import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

const ENV = process.env.NODE_ENV;

const mongooseModuleConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI'),
  }),
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV ? `${ENV}.env` : `development.env`,
      validationOptions: {
        abortEarly: true,
      },
    }),
    MongooseModule.forRootAsync(mongooseModuleConfig),
    PostModule,
  ],
})
export class AppModule {}
