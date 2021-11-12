import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SETUP,
  USER_CHANGE_LANG,
} from '../reducers/UserReducer';

export function login(userInfo){
  return {
    type: USER_LOGIN,
    userInfo
  }
}

export function setupUser(userInfo){
  return {
    type: USER_SETUP,
    userInfo
  }
}

export function logout(errCode){
  return {
    type: USER_LOGOUT,
    errCode
  }
}

export function changeLang(lang){
  return {
    type: USER_CHANGE_LANG,
    lang,
  }
}