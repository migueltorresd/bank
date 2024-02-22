import { IUseCase } from '../interface';
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  GetAllUsersUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
} from '../use-cases/user/';
import { Observable } from 'rxjs';

export class Delegate implements IUseCase {
  private delegate: IUseCase;
  userService: any;
  authService: any;

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateUser(): void {
    this.delegate = new CreateUserUseCase(this.userService, this.authService);
  }

  toDeleteUser(): void {
    this.delegate = new DeleteUserUseCase(this.userService);
  }

  toUpdateUser(): void {
    this.delegate = new UpdateUserUseCase(this.userService);
  }

  toGetUser(): void {
    this.delegate = new GetUserUseCase(this.userService, this.authService);
  }
  toGetAllUsers(): void {
    this.delegate = new GetAllUsersUseCase(this.userService);
  }
}
