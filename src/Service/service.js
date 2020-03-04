import axios from 'axios';


export const service = {
    
    getAllUsers: async () => {
        const getAllUsers = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return getAllUsers.data;
    }

}

/*
//action
export const sendAdvertForm = (body, id) => (dispatch) => {
  return dispatch({
    [CALL_API]: {
      endpoint: enquiry(id),
      method: POST_METHOD,
      types: [types.SEND_ADVERT_FORM_REQUEST, types.SEND_ADVERT_FORM_SUCCESS, types.SEND_ADVERT_FORM_FAILTURE],
      body
    }
  });
};


//middleware
import { normalize } from 'normalizr';
import { assign } from 'lodash';
import { camelizeKeys } from 'humps';
import { POST_METHOD, PUT_METHOD } from '../constants/request-methods';
import { LOGOUT_REQUEST, HIDE_SPINNER } from '../constants/types';
import { BASE_URL } from '../config/env';
import 'isomorphic-fetch';

const getHeaders = (token) => {
  const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'credentials': 'include',
    'cache': 'no-cache',
    'Cache-Control': 'no-cache'
  };

  return token ? Object.assign({}, reqHeaders, { 'Authorization': `Bearer ${token}` }) : reqHeaders;
};

const getBody = (body) => JSON.stringify(body);

const getFetchAction = (baseUrl, endpoint, method, body, token) => {

  const reqHeaders = getHeaders(token);

  if (method === POST_METHOD || method === PUT_METHOD) {
    return fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: reqHeaders,
      body: getBody(body)
    });
  }

  return fetch(`${baseUrl}${endpoint}`, {
    method,
    headers: reqHeaders
  });
};

  function getNormalizedResponse(json, schema) {
    let normalizedResponse = normalize(json.results, schema);
    let totalObj = {
    total: json.total
  };

  assign(normalizedResponse, totalObj);
  return Object.assign({}, normalizedResponse);
}

export const callApi = (isApiUrl, endpoint, method, body, schema, token) => {
  return Promise.race([
    getFetchAction(BASE_URL, endpoint, method, body, token),
    new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('request timeout')), 15000);
    })
]).then((response) => {
    return response.json().then((json) => ({ json, response }));
}).then(({ json, response }) => {
    if (!response.ok || (typeof (json) === 'boolean' && !json)) {
json.code = response.status;
    return Promise.reject(json);
}
  if (schema) {
    return { json: getNormalizedResponse(json, schema), status: response.status };
  }
    return { json, status: response.status };
  });
};

export const CALL_API = Symbol('Call API');

function actionWith(action, data) {
  const finalAction = Object.assign({}, action, data);

  delete finalAction[CALL_API];

  return finalAction;
}

export default (store) => (next) => (action) => {
  const responsesArray = [200, 202];
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
  return next(action);
}

let {
endpoint, body, method, schema, apiUrl, images, port, isTrustpilot
} = callAPI;
const { types } = callAPI;
const state = store.getState();
let token = state.auth.token;

if (typeof endpoint === 'function') {
endpoint = endpoint(state);
}

if (!method) {
throw new Error('method is not exist');
}

if (typeof endpoint !== 'string') {
throw new Error('Specify a string endpoint URL.');
}
if (!Array.isArray(types) || types.length !== 3) {
throw new Error('Expected an array of three action types.');
}
if (!types.every((type) => typeof type === 'string')) {
throw new Error('Expected action types to be strings.');
}

let [requestType, successType, failureType] = types;

next(actionWith(action, { type: requestType }));

return callApi(apiUrl, endpoint, method, body, schema, token, images, port, isTrustpilot).then(
(response) => {
const camelizedResult = camelizeKeys(response.json);
next(actionWith(action, Object.assign({}, {
type: responsesArray.includes(response.status) ? successType : failureType
}, camelizedResult)));
next(actionWith(action, { type: HIDE_SPINNER }));
return camelizedResult;
},
(error) => {
if (error.code === 401) {
failureType = LOGOUT_REQUEST;
}
next(actionWith(action, {
type: failureType,
status: 'ERROR',
description: error.message || 'Something bad happened'
}));
next(actionWith(action, { type: HIDE_SPINNER }));
}
);
};*/