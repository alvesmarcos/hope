import { ApplicationState } from '~/store';
import { Feed } from './types';

const getFeedData = (state: ApplicationState): Feed => {
  return state.feedReducer.data;
};

const getFeedLoading = (state: ApplicationState): boolean => {
  return state.feedReducer.loading;
};

const getFeedError = (state: ApplicationState): boolean => {
  return state.feedReducer.error;
};

export { getFeedData, getFeedLoading, getFeedError };
