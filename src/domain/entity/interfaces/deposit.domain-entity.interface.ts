import { IAccountDomainEntity } from './account.domain-entity.interface';

export interface IDepositDomainEntity {
  id: string;
  account: IAccountDomainEntity;
  amount: number;
  dateTime: Date | number;
  deletedAt?: Date | number;
}
