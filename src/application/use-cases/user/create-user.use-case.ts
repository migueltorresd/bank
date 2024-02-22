import { Observable, switchMap } from 'rxjs';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { IAuthService } from '../../../domain/services/auth.service';
import { IUseCase } from 'src/application/interface';

export class CreateUserUseCase implements IUseCase {
  constructor(
    private readonly userService: IUserService,
    private authService: IAuthService,
  ) {}

  execute(
    userEntity: UserDomainModel,
  ): Observable<{ data: UserDomainModel; token: string }> {
    return this.userService
      .create(userEntity)
      .pipe(switchMap((user) => this.authService.generateToken(user)));
  }
}
