import request from '@/utils/request';

export async function queryCard(): Promise<any> {
  return request('/api/home/card');
}

// export interface tableParamsType {
//   searchContentVal: string;
//   statusVal: string;
// }

// export async function queryTableList(params: tableParamsType) {
//   return request('/api/queryTableList', {
//     method: 'POST',
//     data: params,
//   });
// }
