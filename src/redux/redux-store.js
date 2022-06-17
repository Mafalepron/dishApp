import { combineReducers, legacy_createStore as createStore } from 'redux';
import comingReducer from './comingReducer';
import refundReducer from './refundReducer,js';


let reducers = combineReducers({
    'dialogsPage': comingReducer,
    'profilePage': refundReducer,
});

let store = createStore(reducers);


export default store;