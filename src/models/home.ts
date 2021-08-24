import { Effect, Reducer } from 'umi';
import { queryCard } from '@/services/home';


export interface IHomeState {
  data:any[]

}


export interface IHomeModal {
  state: IHomeState;
  effects: {
    queryCard: Effect;
  };
  reducers: {
    save: Reducer<IHomeModal>;
  };
}

const HomeModel: IHomeModal = {
  state: {
    data:[]
  },
  effects: {
    *queryCard(_, { call, put }) {
      const response = yield call(queryCard);
      yield put({
        type: 'save',
        payload: {
          data: response.data,
        },
      });
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

export default HomeModel;
