export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

const initState = {
  data: {},
  user: { id: 'sample_user_id' },
};

const FakeReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: payload.data,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: payload.data,
      };
    default:
      return { ...state };
  }
};

export default FakeReducer;