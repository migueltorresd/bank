import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongo.config';

import { UserRepository } from './repositories/user.repository';
import { UserMongoService } from './services/user.service';
import { UserMongo, UserSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeature([
      {
        name: UserMongo.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [MongooseConfigService, UserMongoService, UserRepository],
  exports: [UserMongoService, UserRepository],
})
export class MongoModule {}
