import { UserDomainModel } from '../../domain/models/user.domain-model';
import { Observable } from 'rxjs';

export interface IUserService<
  Entity extends UserDomainModel = UserDomainModel,
> {
  create(entity: Entity): Observable<Entity>;
  findById(id: string): Observable<Entity>;
  delete(id: string): Observable<Entity>;
  update(id: string, updates: Partial<Entity>): Observable<Entity>;
  findAll(): Observable<Entity[]>;
}
