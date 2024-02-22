import { IUseCase } from '../../../application/interface';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { Observable } from 'rxjs';

export class GetAllUsersUseCase implements IUseCase {
  constructor(private readonly service: IUserService) {}

  execute(): Observable<UserDomainModel[]> {
    return this.service.findAll();
  }
}
