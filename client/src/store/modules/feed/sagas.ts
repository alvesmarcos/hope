import { put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/HopeService';
import { successFeed, failureFeed } from './actions';
import { FeedTypes } from './types';

function* getFeed() {
  try {
    const data = yield api.getFeed();
    yield put(successFeed(data));
  } catch (error) {
    yield put(failureFeed());
  }
}

export default all([takeLatest(FeedTypes.FEED_REQUEST, getFeed)]);
