// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';

export default {
  'GET /api/home/card': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send({
        code: '200',
        data: [
          {
            name:'章三',
            value:19,
            id:1
          },
          {
            name:'里斯',
            value:170,
            id:2
          },
          {
            name:'王二麻',
            value:199,
            id:3
          },
          {
            name:'哈哈',
            value:169,
            id:4
          }
        ],
      });
    }, 1500);
    return;
  },
};
