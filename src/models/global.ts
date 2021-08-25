import { Effect, Reducer, Subscription } from 'umi';
import { queryUserInfo } from '@/services/login';
import menusSource from '../../config/menu.config';
import { IMenusDate, ILoginUserInfoState } from './connect.d';

export interface IGlobalModelState {
  name: string;
  menusData: IMenusDate[];
  userInfo: ILoginUserInfoState;
}

export interface GlobalModelType {
  state: IGlobalModelState;
  effects: {
    queryUserInfo: Effect;
  };
  reducers: {
    save: Reducer<IGlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  state: {
    name: '',
    menusData: menusSource,
    userInfo: {
      id: '',
      name: '',
    },
  },
  effects: {
    *queryUserInfo({ payload }, { call, put }) {
      const userid = localStorage.getItem('userid');
      const response = yield call(queryUserInfo, { ...payload, userid });
      if (response.status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            userInfo: response.data,
          },
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
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const reg = /^\/login/g;
        if (!reg.test(pathname)) {
          dispatch({
            type: 'queryUserInfo',
            payload: {},
          });
        }
      });
    },
  },
};

export default GlobalModel;
