import { v4 as uuid } from 'uuid';
import { IDocumentTypeDomainEntity } from './interfaces/document-type.domain-entity.interface';

export class DocumentTypeDomainEntity implements IDocumentTypeDomainEntity {
  id = uuid();
  name: string;
  state = true;
}
