import { all } from 'redux-saga/effects';

import accountSaga from './account/sagas';

export default function* rootSaga() {
  return yield all([accountSaga]);
}
