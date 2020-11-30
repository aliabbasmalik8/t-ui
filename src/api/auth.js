import request from './request';

export const signup = (data, successAction) => {
  request({
    path: 'user/signup',
    successAction,
    opts: {
      data,
      method: 'POST',
    },
  });
}

export const signin = (data, successAction) => {
  request({
    path: 'user/signin',
    successAction,
    opts: {
      data,
      method: 'POST',
    },
  });
}

export const userApi = (successAction) => {
  request({
    path: 'user',
    successAction,
    opts: {
      method: 'GET',
    },
  });
};