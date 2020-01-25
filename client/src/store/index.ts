import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { AccountState } from './modules/account/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface ApplicationState {
  accountReducer: AccountState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
