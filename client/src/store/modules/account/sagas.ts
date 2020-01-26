import { put, all, takeLatest, select } from 'redux-saga/effects';

import navService from '~/services/NavigationService';
import api from '~/services/HopeService';
import {
  successCreateAccount,
  failureCreateAccount,
  failureLogin,
  successLogin,
} from './actions';
import { AccountTypes } from './types';
import { getAccountData } from './selectors';

function* createAccount() {
  try {
    const data = yield select(getAccountData);
    const token = yield api.createAccount(
      data.name,
      data.email,
      data.password,
      data.profile_id,
    );
    yield put(successCreateAccount(token));
    navService.push('Intro');
  } catch (error) {
    yield put(failureCreateAccount());
  }
}

function* signIn() {
  try {
    const data = yield select(getAccountData);
    const token = yield api.signIn(data.email, data.password);

    yield put(successLogin(token));
    navService.push('Home');
  } catch (error) {
    yield put(failureLogin());
  }
}

export default all([
  takeLatest(AccountTypes.CREATE_ACCOUNT_REQUEST, createAccount),
  takeLatest(AccountTypes.LOGIN_REQUEST, signIn),
]);
