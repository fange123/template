import { Effect, Reducer, history } from 'umi';
import { message } from 'antd';
import { queryLogin, logout } from '@/services/login';

import { IConnectState, ILoginUserInfoState } from './connect.d';

export interface ILoginModelState {
  userInfo: ILoginUserInfoState;
  isError: boolean;
}

export interface LoginModelType {
  namespace: 'login';
  state: ILoginModelState;
  effects: {
    getUserInfo: Effect;
    queryLogin: Effect;
    logout: Effect;
  };
  reducers: {
    save: Reducer<ILoginModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<ILoginModelState>;
  };
}

const LoginModel: LoginModelType = {
  namespace: 'login',
  state: {
    userInfo: {
      id: '',
      name: '',
    },
    isError: false,
  },
  effects: {
    *queryLogin({ payload }, { call, put }) {
      // const { name } = yield select((state: IConnectState) => state.global);
      const response = yield call(queryLogin, { ...payload });
      if (response.status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            userInfo: response.currentAuthority,
          },
        });
        localStorage.setItem(
          'userid',
          JSON.stringify(response.currentAuthority.userid),
        );
        message.success('登录成功！');
        history.replace('/');
      } else {
        yield put({
          type: 'save',
          payload: {
            isError: true,
          },
        });
      }
    },
    *getUserInfo({ payload }, { call, put, select }) {
      const { name } = yield select((state: IConnectState) => state.global);
      const data = yield call(queryLogin, { ...payload, name });
      yield put({
        type: 'save',
        payload: {
          userInfo: data,
        },
      });
    },
    *logout(_, { call }) {
      const response = yield call(logout);
      if (response.status === 'ok') {
        localStorage.removeItem('userid');
        history.replace({
          pathname: '/login',
          search: `timestamp=${new Date().getTime()}`,
        });
      }
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
};

export default LoginModel;
