import { IDocumentTypeDomainEntity } from './document-type.domain-entity.interface';

export interface ICustomerDomainEntity {
  id: string;
  documentType: IDocumentTypeDomainEntity;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  photoUrl?: string;
  state: boolean;
  deletedAt?: Date | number;
}
