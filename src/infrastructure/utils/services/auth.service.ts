import { IAuthService } from '../../../domain/services/auth.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, of } from 'rxjs';
import { IUserDomainModel } from 'src/domain/models/interfaces';
import { UserModel } from 'src/infrastructure/models/user.model';

/**
 * interface for the auth service
 *
 * @export
 * @class AuthService
 * @typedef {AuthService}
 * @implements {IAuthService}
 */
@Injectable()
export class AuthService implements IAuthService {
  /**
   * Creates an instance of AuthService.
   *
   * @constructor
   * @param {JwtService} jwtService
   */
  constructor(private readonly jwtService: JwtService) {}
  /**
   * generate token
   *
   * @param {IUserDomainModel} user user domain model
   * @returns {Observable<{
   *  data: UserModel;
   *  token: string;
   *}>} user domain model and token
   */
  generateToken(user: IUserDomainModel): Observable<{
    data: UserModel;
    token: string;
  }> {
    return of({
      data: user,
      token: this.jwtService.sign({
        email: user.email,
        name: user.name,
      }),
    });
  }
}
