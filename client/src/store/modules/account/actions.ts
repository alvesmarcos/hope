import { AccountTypes, AccountCreators } from './types';

export function reqLogin(): AccountCreators {
  return { type: AccountTypes.LOGIN_REQUEST };
}

export function successLogin(token: string): AccountCreators {
  return { type: AccountTypes.LOGIN_SUCCESS, payload: token };
}

export function failureLogin(): AccountCreators {
  return { type: AccountTypes.LOGIN_FAILURE };
}

export function reqCreateAccount(): AccountCreators {
  return { type: AccountTypes.CREATE_ACCOUNT_REQUEST };
}

export function successCreateAccount(token: string): AccountCreators {
  return { type: AccountTypes.CREATE_ACCOUNT_SUCCESS, payload: token };
}

export function failureCreateAccount(): AccountCreators {
  return { type: AccountTypes.CREATE_ACCOUNT_FAILURE };
}

export function setName(name: string): AccountCreators {
  return { type: AccountTypes.SET_NAME_ACCOUNT, payload: name };
}

export function setEmail(email: string): AccountCreators {
  return { type: AccountTypes.SET_EMAIL_ACCOUNT, payload: email };
}

export function setPassword(password: string): AccountCreators {
  return { type: AccountTypes.SET_PASSWORD_ACCOUNT, payload: password };
}

export function setProfile(profile: number): AccountCreators {
  return { type: AccountTypes.SET_PROFILE_ACCOUNT, payload: profile };
}

export function setRecoveryToken(token: string): AccountCreators {
  return { type: AccountTypes.SET_RECOVERY_TOKEN_ACCOUNT, payload: token };
}

export function resetLoadingError(): AccountCreators {
  return { type: AccountTypes.RESET_LOADING_ERROR };
}
