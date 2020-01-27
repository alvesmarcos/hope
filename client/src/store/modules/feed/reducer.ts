import produce from 'immer';
import { Reducer } from 'redux';

import { FeedState, FeedTypes } from './types';

const INITIAL_STATE: FeedState = {
  data: {
    fact: null,
    article: null,
    documentary: null,
    testimony: null,
    quote: null,
    expert_opinion: null,
    faq: null,
    tip: null,
  },
  error: false,
  loading: false,
};

const reducer: Reducer<FeedState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case FeedTypes.FEED_REQUEST:
        draft.loading = true;
        draft.error = false;
        break;
      case FeedTypes.FEED_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case FeedTypes.FEED_SUCCESS:
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
        break;
      default:
    }
  });
};

export default reducer;
