import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFeedLoading, getFeedData } from '~/store/modules/feed/selectors';
import { reqFeed } from '~/store/modules/feed/actions';
import { getAccountData } from '~/store/modules/account/selectors';
import HomeLayout from './Layout';

const Home: React.FC = () => {
  // redux
  const dispatch = useDispatch();
  const account = useSelector(getAccountData);
  const loading = useSelector(getFeedLoading);
  const data = useSelector(getFeedData);

  useEffect(() => onRefresh(), []);

  function onRefresh() {
    dispatch(reqFeed());
  }

  return (
    <HomeLayout
      headerName={account.name}
      data={data}
      loading={loading}
      onRefresh={onRefresh}
    />
  );
};

export default Home;
