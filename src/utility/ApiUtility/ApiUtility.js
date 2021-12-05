import axios from 'axios';
import EnvUtility from "../EnvUtility";

const _isDebugMode = process.env.NODE_ENV !== 'production';

const _METHOD = Object.freeze({
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
});

const _client = axios.create({
  baseURL: EnvUtility.API_DOMAIN,
});

export default class ApiUtility {
  static get = async(path) => {
    return this._request({
      method: _METHOD.GET,
      path,
    }); 
  }

  static post = async(path, data) => {
    return this._request({
      method: _METHOD.POST,
      path,
      data,
    }); 
  }

  static put = async(path) => {
    return this._request({
      method: _METHOD.PUT,
      path,
    }); 
  }
  
  static delete = async(path) => {
    return this._request({
      method: _METHOD.DELETE,
      path,
    }); 
  }

  static _request = async({
    method,
    path,
    data,
  }) => {
    let res;
    try {
      switch(method) {
        case _METHOD.GET: 
          res = await _client.get(path, { withCredentials: true });
          break; 
        case _METHOD.POST: 
          res = await _client.post(path, data, { withCredentials: true });
          break; 
        case _METHOD.PUT: 
          break; 
        case _METHOD.DELETE:
          break; 
      }
      if (_isDebugMode) {
        console.log(res);
      }
    } catch (e) {

    }
  }
}


