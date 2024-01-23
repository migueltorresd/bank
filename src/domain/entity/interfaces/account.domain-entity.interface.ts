import { ICustomerDomainEntity } from './customer.domain-entity.interface';

export interface IAccountDomainEntity {
  id: string;
  customer: ICustomerDomainEntity;
  accountType: IAccountDomainEntity;
  balance: number;
  state: boolean;
  deletedAt?: Date | number;
}
