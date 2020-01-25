import { ApplicationState } from '~/store';
import { Account } from './types';

const getAccountData = (state: ApplicationState): Account => {
  return state.accountReducer.data;
};

export { getAccountData };
