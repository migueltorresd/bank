import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { UserDocument, UserMongo } from '../schemas/user.schema';
import { IBaseRepository } from './Interface';

@Injectable()
export class UserRepository implements IBaseRepository<UserMongo> {
  constructor(
    @InjectModel(UserMongo.name)
    private readonly repository: Model<UserDocument>,
  ) {}

  create(entity: UserMongo): Observable<UserMongo> {
    return from(this.repository.create(entity));
  }

  findById(id: string): Observable<UserMongo> {
    return from(this.repository.findOne({ googleId: id }));
  }

  delete(_id: string): Observable<UserMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }

  findAll(): Observable<UserMongo[]> {
    return from(this.repository.find().exec());
  }

  update(id: string, updates: Partial<UserMongo>): Observable<UserMongo> {
    return from(this.repository.findByIdAndUpdate(id, updates, { new: true }));
  }
}
