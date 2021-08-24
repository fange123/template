import React, { FC, useEffect } from 'react';
import { connect } from 'umi';
import {  IHomeState, IConnectState, IConnectProps } from '@/models/connect';
import styles from './index.less'

interface IProps extends IHomeState,IConnectProps {
}

const Home: FC<IProps> = props => {
  const { data,dispatch } = props;

  useEffect(() => {
    dispatch({
      type: 'home/queryCard',
    });
  }, []);
  return (
    <div className={styles.home}>
      首页
      {data.map(item=> <p key={item.id}>姓名:{item.name},工资:{item.value}</p>)}
    </div>
  );
};

export default connect(
  ({
    home,
    loading,
  }: IConnectState) => ({
    ...home,
    loading: loading.effects['dashboard/queryCard'],
  }),
)(Home);
