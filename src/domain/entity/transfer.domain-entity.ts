import { IAccountDomainEntity } from './interfaces/account.domain-entity.interface';
import { ITransferDomainEntity } from './interfaces/transfer..domain-entity.interface';
import { v4 as uuid } from 'uuid';

export class TransferDomainEntity implements ITransferDomainEntity {
  id = uuid();
  outcome: IAccountDomainEntity;
  income: IAccountDomainEntity;
  amount: number;
  reason: string;
  dateTime: number | Date;
  deletedAt?: number | Date;
}
