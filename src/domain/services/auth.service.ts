import { Observable } from 'rxjs';
import { IUserDomainModel } from '../models/interfaces';

export interface IAuthService {
  generateToken(
    id: IUserDomainModel,
  ): Observable<{ data: IUserDomainModel; token: string }>;
}
