import React, { FC } from 'react';
import { connect } from 'umi';
import { Dropdown, Menu } from 'antd';
import {
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
} from '@ant-design/icons';
import {
  IGlobalModelState,
  IConnectState,
  IConnectProps,
} from '@/models/connect';

interface IProps extends IConnectProps, IGlobalModelState {}

const UserSettingLayout: FC<IProps> = props => {
  const { userInfo, dispatch } = props;
  const handleSubmit = (event: any) => {
    const { key } = event;
    if (key === 'logout') {
      dispatch({
        type: 'login/logout',
      });
    }
  };

  const menu = (
    <Menu onClick={handleSubmit}>
      <Menu.Item key="setPwd">
        <SettingOutlined />
        设置密码
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined /> 退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        width: 200,
        textAlign: 'right',
      }}
    >
      <Dropdown overlay={menu} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: '#fff', fontSize: 16 }}>
          {userInfo.username} <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
};

export default connect(({ login, global }: IConnectState) => ({
  ...login,
  ...global,
}))(UserSettingLayout);
