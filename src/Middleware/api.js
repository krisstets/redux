
import { schema } from 'normalizr'

export const CALL_API = 'CALL_API';


const API_ROOT = 'https://jsonplaceholder.typicode.com/ '


export const callApi = (endpoint) => {
  const fullUrl =  API_ROOT + endpoint ;

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json)
        }
      })
    )
}

const postSchema = new schema.Entity('posts');

const userSchema = new schema.Entity('user');

export const Schemas = {
  POSTS: postSchema,
  USER: userSchema
}

export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}

  
  /*const getFetchAction = (baseUrl, endpoint) => {
    return fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: reqHeaders
    });
  };

  export const callApi = (isApiUrl, endpoint) => {
    return Promise.race([
      getFetchAction(BASE_URL, endpoint),
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
     
      return { json, status: response.status };
    });
  };

  export const CALL_API ;

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
    endpoint, apiUrl
  } = callAPI;
  const { types } = callAPI;
  const state = store.getState();
 

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

   return callApi(apiUrl, endpoint).then(
    (response) => {
      const res = response.json;
      next(actionWith(action, Object.assign({}, {
        type: responsesArray.includes(response.status) ? successType : failureType
      })));
      return res;
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
};
*/



