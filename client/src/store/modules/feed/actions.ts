import { FeedTypes, FeedCreators, Feed } from './types';

export function reqFeed(): FeedCreators {
  return { type: FeedTypes.FEED_REQUEST };
}

export function successFeed(data: Feed): FeedCreators {
  return { type: FeedTypes.FEED_SUCCESS, payload: data };
}

export function failureFeed(): FeedCreators {
  return { type: FeedTypes.FEED_FAILURE };
}
