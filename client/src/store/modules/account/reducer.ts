import produce from 'immer';
import { Reducer } from 'redux';

import { AccountState, AccountTypes } from './types';

const INITIAL_STATE: AccountState = {
  data: { name: '', email: '', password: '', profile_id: 0 },
  token: '',
  error: '',
  loading: false,
};

const reducer: Reducer<AccountState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case AccountTypes.LOGIN_REQUEST:
      case AccountTypes.CREATE_ACCOUNT_REQUEST:
        draft.loading = true;
        draft.error = '';
        break;
      case AccountTypes.LOGIN_FAILURE:
      case AccountTypes.CREATE_ACCOUNT_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case AccountTypes.LOGIN_SUCCESS:
      case AccountTypes.CREATE_ACCOUNT_SUCCESS:
        draft.token = action.payload;
        draft.loading = true;
        draft.error = '';
        break;
      case AccountTypes.SET_NAME_ACCOUNT:
        draft.data.name = action.payload;
        break;
      case AccountTypes.SET_EMAIL_ACCOUNT:
        draft.data.email = action.payload;
        break;
      case AccountTypes.SET_PASSWORD_ACCOUNT:
        draft.data.password = action.payload;
        break;
      case AccountTypes.SET_PROFILE_ACCOUNT:
        draft.data.profile_id = action.payload;
        break;
      default:
    }
  });
};

export default reducer;
