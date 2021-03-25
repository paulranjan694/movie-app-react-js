import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

// function logger(obj,next,action)
// logger(obj)(next)(action)
// const logger = function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       // middleware code
//       console.log("ACTION_TYPE- ", action.type);
//       next(action);//to move to next middleware(if any, in case of multiple middleware) or to dispatch
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
  // logger code
  if(typeof action !== 'function')
    console.log("ACTION_TYPE- ", action.type);
  next(action);
}

// thunk middleware
// internally thunk works like this only
// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   if(typeof action === 'function'){
//     action(dispatch);
//     return ;
//   }
//   next(action);
// }

// create store
const store = createStore(rootReducer, applyMiddleware(logger,thunk));



ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
