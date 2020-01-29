import { ApplicationState } from '~/store';
import { Account } from './types';

const getAccountData = (state: ApplicationState): Account => {
  return state.accountReducer.data;
};

const getAccountLoading = (state: ApplicationState): boolean => {
  return state.accountReducer.loading;
};

const getAccountError = (state: ApplicationState): boolean => {
  return state.accountReducer.error;
};

export { getAccountData, getAccountLoading, getAccountError };
