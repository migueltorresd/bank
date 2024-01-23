import { IAccountDomainEntity } from './interfaces/account.domain-entity.interface';
import { IDepositDomainEntity } from './interfaces/deposit.domain-entity.interface';
import { v4 as uuid } from 'uuid';

export class DepositDomainEntity implements IDepositDomainEntity {
  id = uuid();
  account: IAccountDomainEntity;
  amount: number;
  dateTime: number | Date;
  deletedAt?: number | Date;
}
