import { NotFoundException } from '@nestjs/common';
import { IUseCase } from '../../../application/interface';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { Observable, switchMap, catchError } from 'rxjs';

export class UpdateUserUseCase implements IUseCase {
  constructor(private readonly service: IUserService) {}

  execute(
    _id: string,
    updatedUserData: UserDomainModel,
  ): Observable<UserDomainModel> {
    // Buscar el usuario por su ID
    return this.service.findById(_id).pipe(
      switchMap((existingUser) => {
        // Verificar si el usuario existe
        if (!existingUser) {
          // Lanzar una excepción si el usuario no existe
          throw new NotFoundException('Usuario no encontrado');
        }

        // Fusionar los datos existentes con los datos actualizados
        const updatedUser = { ...existingUser, ...updatedUserData };

        // Llamar al método de actualización en el servicio de usuario
        return this.service.update(_id, updatedUser);
      }),
      catchError((error) => {
        // Manejar cualquier error específico si es necesario
        throw error;
      }),
    );
  }
}
