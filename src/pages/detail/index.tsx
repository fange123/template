import React, { FC, useEffect } from 'react';
import { connect } from 'umi';
import {  IConnectState, IHomeState, IConnectProps } from '@/models/connect';
import styles from './index.less'
import { BarChart } from '@/components';

interface IProps extends IHomeState,IConnectProps{

}

const Detail: FC<IProps> = props => {
  const { data ,dispatch} = props;

  useEffect(() => {
    dispatch({
      type: 'home/queryCard',
    });
  }, []);
  return (
    <div className={styles.detail}>
      详情,
      <BarChart chartData={data}/>
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
)(Detail);
