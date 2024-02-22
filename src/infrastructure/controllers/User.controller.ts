import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Delegate } from 'src/application/delegate';
import { AuthService } from '../utils/services/auth.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller()
export class UserController {
  private readonly delegate: Delegate;

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    this.delegate = new Delegate();
  }

  @Get('user/:id')
  getUser(@Param('id') id: string): Observable<UserModel> {
    this.delegate.toGetUser();
    return this.delegate.execute(id);
  }

  @Post('user')
  createUser(@Body() user: CreateUserDto): Observable<UserModel> {
    this.delegate.toCreateUser();
    return this.delegate.execute(user);
  }

  @Put('user/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updates: CreateUserDto,
  ): Observable<UserModel> {
    this.delegate.toUpdateUser();
    return this.delegate.execute(id, updates);
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id: string): Observable<UserModel> {
    this.delegate.toDeleteUser();
    return this.delegate.execute(id);
  }
}
