import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import navService from '~/services/NavigationService';
import {
  setProfile,
  reqCreateAccount,
  resetLoadingError,
} from '~/store/modules/account/actions';
import {
  getAccountLoading,
  getAccountError,
} from '~/store/modules/account/selectors';
import data from './data';
import LayoutProfileLogin from './Layout';

const ProfileLogin: React.FC = () => {
  // states
  const [dataState, setDataState] = useState(data);
  // redux
  const loading = useSelector(getAccountLoading);
  const error = useSelector(getAccountError);
  const dispatch = useDispatch();

  useEffect(() => refreshError(), []);

  function refreshError() {
    dispatch(resetLoadingError());
  }

  function selectCard(id: number) {
    data.forEach(item => {
      item.actived = item.id === id;
    });
    dispatch(setProfile(id));

    setDataState([...data]);
  }

  function back() {
    navService.pop();
  }

  function next() {
    dispatch(reqCreateAccount());
  }

  // render
  return (
    <LayoutProfileLogin
      data={dataState}
      loading={loading}
      onPressCard={selectCard}
      onPressBack={back}
      onPressNext={next}
      error={error}
    />
  );
};

export default ProfileLogin;
