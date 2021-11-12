import { FETCH_DATA, FETCH_USER } from '../../reducers/FakeReducer';

export function getData() {
  return {
    type: FETCH_DATA,
  };
}

export function getUser(dispatch) {
  return {
    type: FETCH_USER,
  };
}