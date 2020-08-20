import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducer from './loginReducer/loginReducer';
import ReduxThunk from 'redux-thunk';

const  store = createStore(reducer);

console.log(store)
export default store;