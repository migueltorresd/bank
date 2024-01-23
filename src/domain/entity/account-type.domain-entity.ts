import { IAccountTypeDomainEntity } from './interfaces/account-type.domain-entity.interface';

export class AccountTypeDomainEntity implements IAccountTypeDomainEntity {
  id: string;
  name: string;
  state: boolean;
}
