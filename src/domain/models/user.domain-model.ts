import { IUserDomainModel } from './interfaces/user.domain-model.interface';

/**
 * class for user domain model
 *
 * @export
 * @class UserDomainModel
 * @typedef {UserDomainModel}
 * @implements {IUserDomainModel}
 */
export class UserDomainModel implements IUserDomainModel {
  /**
   * id of user
   *
   * @type {?string} _id - id of user
   */
  _id?: string;
  /**
   * name of user
   *
   * @type {string} name
   */
  name: string;
  /**
   * email of user
   *
   * @type {string} email
   */
  email: string;
  /**
   * photo url of user
   *
   * @type {string} photoUrl
   */
  photoUrl: string;
  /**
   * google id of user
   *
   * @type {string} googleId
   */
  googleId: string;
}
