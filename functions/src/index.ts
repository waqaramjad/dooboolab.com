import * as functions from 'firebase-functions';

import {runIapApp} from './iapApp';

export const iapApp = functions.https.onRequest(runIapApp());

export const joinSlack = functions.https.onRequest(
  (_: any, response: {redirect: (arg0: string) => void}) => {
    response.redirect(
      'https://join.slack.com/t/dooboolab/shared_invite/enQtNTAwODgxNDExNTg2LTkzNTA3ZmJmZDM4YzQ3ZWEyNTI3MjdkZjJmYjNhNjlmY2UzYjMzZTJjMjVkMmIzM2M1Y2QyZjlkN2NkZjhmZWE',
    );
  },
);

export const joinWeCount = functions.https.onRequest(
  (_: any, response: {redirect: (arg0: string) => void}) => {
    response.redirect(
      'https://join.slack.com/t/wecount-dev/shared_invite/zt-ts3zriqd-BCVKYOTBCKw_U6DlcvOI2A',
    );
  },
);

export const joinRNSeoul = functions.https.onRequest(
  (_: any, response: {redirect: (arg0: string) => void}) => {
    response.redirect(
      'https://join.slack.com/t/reactnativeseoul/shared_invite/zt-1fey1h981-Tu9CRZQIoLkjhBl9XoyiPA',
    );
  },
);

export const joinPrismaKorea = functions.https.onRequest(
  (_: any, response: {redirect: (arg0: string) => void}) => {
    response.redirect(
      'https://join.slack.com/t/prisma-korea/shared_invite/enQtOTMyNzc4NzYxMjg1LTMwNzg3ODFiY2I2ODlkMWFiZTU0NDg5Zjg0MDRkMGY3MGExZTAwZTIxNmE1YzJkNGJhMmU5ZGYzYTY0N2EzNDY',
    );
  },
);
