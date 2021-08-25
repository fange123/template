import React, { FC } from 'react';
import { Link, connect, useLocation } from 'umi';
import { Menu } from 'antd';
import {
  IGlobalModelState,
  IConnectProps,
  IConnectState,
} from '@/models/connect';
import { queryKeysByPath } from '@/utils/utils';

const { SubMenu, Item } = Menu;

interface IProps extends IConnectProps, IGlobalModelState {}

const MenuContent: FC<IProps> = props => {
  const { menusData } = props;
  const location = useLocation();

  const renderMenu = (data: any = []) => {
    const rows = Array.isArray(data) ? data : [];
    return rows.map(row => {
      if (row === undefined) return false;
      const { title, path = '', key, children, ...restState } = row;
      if (children && children.length > 0) {
        const subMenu = renderMenu(children);
        return (
          <SubMenu key={key} title={<span>{title}</span>}>
            {subMenu}
          </SubMenu>
        );
      }
      return (
        <Item key={key} title={title}>
          <Link to={{ pathname: path, state: { ...restState, key } }}>
            {/* <Icon type={icon} /> */}
            <span>{title}</span>
          </Link>
        </Item>
      );
    });
  };

  const { openKey, selectKey } = queryKeysByPath(location.pathname);

  return (
    <Menu
      selectedKeys={[selectKey || '']}
      defaultOpenKeys={[openKey]}
      mode="inline"
      theme="light"
      className="progressbar"
    >
      {renderMenu(menusData)}
    </Menu>
  );
};

export default connect(({ global }: IConnectState) => ({
  ...global,
}))(MenuContent);
