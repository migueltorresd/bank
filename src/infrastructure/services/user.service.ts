import { Injectable } from '@nestjs/common';
import { UserMongoService } from '../persistence';

@Injectable()
export class UserService extends UserMongoService {}
