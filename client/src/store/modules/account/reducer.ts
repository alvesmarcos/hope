import produce from 'immer';
import { Reducer } from 'redux';
import jwtDecode from 'jwt-decode';

import { AccountState, AccountTypes } from './types';

const INITIAL_STATE: AccountState = {
  data: { name: '', email: '', password: '', profile_id: 0 },
  token: '',
  error: false,
  loading: false,
};

const reducer: Reducer<AccountState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case AccountTypes.LOGIN_REQUEST:
      case AccountTypes.CREATE_ACCOUNT_REQUEST:
        draft.loading = true;
        draft.error = false;
        break;
      case AccountTypes.LOGIN_FAILURE:
      case AccountTypes.CREATE_ACCOUNT_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case AccountTypes.LOGIN_SUCCESS:
        draft.token = action.payload;
        const decoded = jwtDecode<{ name: string }>(action.payload);
        draft.data.name = decoded.name;
        draft.loading = true;
        draft.error = false;
      case AccountTypes.CREATE_ACCOUNT_SUCCESS:
        draft.token = action.payload;
        draft.loading = true;
        draft.error = false;
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
      case AccountTypes.RESET_LOADING_ERROR:
        draft.error = false;
        draft.loading = false;
        break;
      default:
    }
  });
};

export default reducer;
