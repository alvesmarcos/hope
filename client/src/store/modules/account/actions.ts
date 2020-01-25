import {
  AccountTypes,
  AccountCreators,
  AccountCreatorsWithPayload,
} from './types';

export function reqLogin(): AccountCreators {
  return { type: AccountTypes.LOGIN_REQUEST };
}

export function successLogin(token: string): AccountCreatorsWithPayload {
  return { type: AccountTypes.LOGIN_SUCCESS, payload: token };
}

export function failureLogin(verbose: string): AccountCreatorsWithPayload {
  return { type: AccountTypes.LOGIN_FAILURE, payload: verbose };
}

export function reqCreateAccount(): AccountCreators {
  return { type: AccountTypes.CREATE_ACCOUNT_REQUEST };
}

export function successCreateAccount(
  token: string,
): AccountCreatorsWithPayload {
  return { type: AccountTypes.CREATE_ACCOUNT_SUCCESS, payload: token };
}

export function failureCreateAccount(
  verbose: string,
): AccountCreatorsWithPayload {
  return { type: AccountTypes.CREATE_ACCOUNT_FAILURE, payload: verbose };
}

export function setName(name: string): AccountCreatorsWithPayload {
  return { type: AccountTypes.SET_NAME_ACCOUNT, payload: name };
}

export function setEmail(email: string): AccountCreatorsWithPayload {
  return { type: AccountTypes.SET_EMAIL_ACCOUNT, payload: email };
}

export function setPassword(password: string): AccountCreatorsWithPayload {
  return { type: AccountTypes.SET_PASSWORD_ACCOUNT, payload: password };
}

export function setProfile(profile: number): AccountCreatorsWithPayload {
  return { type: AccountTypes.SET_PROFILE_ACCOUNT, payload: profile };
}
