import { createStore, combineReducers, applyMiddleware } from 'redux';
import registerReducer from './reducers/register';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    register : registerReducer,
    auth : authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;