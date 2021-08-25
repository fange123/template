import React from 'react';
import UserSetting from './userSetting';

export default (props: any) => {
  return (
    <>
      <div style={{ fontSize: 18, color: '#fff' }}>XX管理平台</div>
      <UserSetting {...props} />
    </>
  );
};
