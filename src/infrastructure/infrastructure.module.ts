import { Module } from '@nestjs/common';
import { MongoModule } from './persistence/database/mongo/mongo.module';
import { UserService } from './services/user.service';

/**
 * module for the infrastructure
 *
 * @export
 * @class InfrastructureModule
 * @typedef {InfrastructureModule}
 */
@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class InfrastructureModule {}
