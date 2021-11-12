import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import FakeReducer from './FakeReducer';

const rootReducer = combineReducers({
    fakeReducer: FakeReducer,
    form: formReducer
})

export default rootReducer