/**
 * interface for user domain model
 *
 * @export
 * @interface IUserDomainModel
 * @typedef {IUserDomainModel}
 */
export interface IUserDomainModel {
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
