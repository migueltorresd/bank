import { v4 as uuid } from 'uuid';
import { ICustomerDomainEntity } from './interfaces/customer.domain-entity.interface';
import { DocumentTypeDomainEntity } from './document-type.entity';

export class CustomerDomainEntity implements ICustomerDomainEntity {
  id = uuid();

  documentType: DocumentTypeDomainEntity;

  document: string;

  fullName: string;

  email: string;

  phone: string;

  password: string;

  photoUrl?: string;

  state = true;

  deletedAt?: Date | number;
}
