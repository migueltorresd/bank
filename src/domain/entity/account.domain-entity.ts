import { IAccountDomainEntity } from './interfaces/account.domain-entity.interface';
import { ICustomerDomainEntity } from './interfaces/customer.domain-entity.interface';
import { v4 as uuid } from 'uuid';

export class AccountEntityDomainEntity implements IAccountDomainEntity {
  id = uuid();
  customer: ICustomerDomainEntity;
  accountType: IAccountDomainEntity;
  balance: number;
  state = true;
  deletedAt?: number | Date;
}
