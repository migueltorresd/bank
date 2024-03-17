import { IUpdateUserDto } from 'src/domain/dto/update-user.dto';
import { IUseCase } from '../../../application/interface';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { Observable, switchMap } from 'rxjs';

export class UpdateUserUseCase implements IUseCase {
  constructor(private readonly service: IUserService) {}

  execute(
    _id: string,
    user: IUpdateUserDto, // Usamos el DTO para los datos actualizados
  ): Observable<UserDomainModel> {
    return this.service.findById(_id).pipe(
      switchMap((entity: UserDomainModel) => {
        const update = new UserDomainModel();
        update.name = user.name || entity.name;
        update.photoUrl = user.photoUrl || entity.photoUrl;
        return this.service.update(_id, update);
      }),
    );
  }
}
