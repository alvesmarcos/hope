import { put, all, takeLatest, select, call } from 'redux-saga/effects';

import api from '~/services/HopeService';
import { successCreateAccount, failureCreateAccount } from './actions';
import { AccountTypes } from './types';

function* createAccount() {
  try {
    const data = yield select(state => state.token);
    const token = yield call(
      api.createAccount,
      data.name,
      data.email,
      data.password,
      data.profile_id,
    );
    yield put(successCreateAccount(token));
  } catch (error) {
    yield put(failureCreateAccount(error.message));
  }
}

export default all([
  takeLatest(AccountTypes.CREATE_ACCOUNT_REQUEST, createAccount),
]);
