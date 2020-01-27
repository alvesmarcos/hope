import { all } from 'redux-saga/effects';

import accountSaga from './account/sagas';
import feedSaga from './feed/sagas';

export default function* rootSaga() {
  return yield all([accountSaga, feedSaga]);
}
