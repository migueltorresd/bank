import { IAccountDomainEntity } from './account.domain-entity.interface';

export interface ITransferDomainEntity {
  id: string;
  outcome: IAccountDomainEntity;
  income: IAccountDomainEntity;
  amount: number;
  reason: string;
  dateTime: Date | number;
  deletedAt?: Date | number;
}
