import {
  ApiUtility,
} from '../../utility';

export default class AuthService {}

AuthService.staffLogin = async() => {
  await ApiUtility.post('/staffLogin', {
    "email": "izawa_sizue@smail.com",
    "password": "123456",
  });
}