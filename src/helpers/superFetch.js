/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2017-12-27T18:04:04+01:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-27T17:40:51+02:00
 */



import _ from 'lodash';
// import { history } from '../redux/store';

require('es6-promise').polyfill();
require('fetch-everywhere');

const customHeader = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

const handleFetchResponse = (response, customHandle) => {
  if( customHandle ) {
    let result = customHandle(response);
    if( result )
        return result;
  }
  if( Number(response.status) >= 400 ) {
    return new Promise((resolve, reject) => {
      resolve(response.json());
    })
    .then(result => {
      return {
        status: response.status,
        error: result.detail || 'FETCH_ERROR'
      };
    })
    .catch(error => {
      return {
        status: response.status,
        error: 'FETCH_ERROR'
      };
    });
  }

  return response.json();
}

const base = (method, url, data, customHandle) => {
  const options = {
    method: _.upperCase(method),
    headers: customHeader()
  };

  if( data )
    options.body =  JSON.stringify(data);

  return fetch(`${url}`, options)
    .then(response => {
      return handleFetchResponse(response, customHandle);
    })
    .catch(error => {
      return { error: 'FETCH_ERROR', status: error.status };
    })
};

const SuperFetch = {};

['get', 'post', 'put', 'patch', 'delete'].forEach(method => {
  SuperFetch[method] = base.bind(null, method);
});

export default SuperFetch;
