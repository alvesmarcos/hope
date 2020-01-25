  export enum AccountTypes {
  LOGIN_REQUEST = '@account/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@account/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@account/LOGIN_FAILURE',
  CREATE_ACCOUNT_REQUEST = '@account/CREATE_ACCOUNT_REQUEST',
  CREATE_ACCOUNT_SUCCESS = '@account/CREATE_ACCOUNT_SUCCESS',
  CREATE_ACCOUNT_FAILURE = '@account/CREATE_ACCOUNT_FAILURE',
  SET_NAME_ACCOUNT = '@account/SET_NAME_ACCOUNT',
  SET_EMAIL_ACCOUNT = '@account/SET_EMAIL_ACCOUNT',
  SET_PASSWORD_ACCOUNT = '@account/SET_PASSWORD_ACCOUNT',
  SET_PROFILE_ACCOUNT = '@account/SET_PROFILE_ACCOUNT',
}

export interface Account {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly profile_id: number;
}

export interface AccountState {
  readonly data: Account;
  readonly token: string;
  readonly loading: boolean;
  readonly error: string;
}

export interface AccountCreators {
  type: AccountTypes;
}

export interface AccountCreatorsWithPayload extends AccountCreators {
  payload: string | number;
}
