import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const myStore = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    {/* Allowing everything here to access state */}
    <Provider store={myStore}> 
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();


//Chrome Dev tool
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
  
  // import {createStore} from 'redux';
  
  // //Store - global location for states
  
  // //Action - describing the action you want
  // const increment =  () =>{
  //   return{
  //     type: "INCREMENT"
  //   }
  // }
  // const decrement =  () =>{
  //   return{
  //     type: "DECREMENT"
  //   }
  // }
  
  // //Reducer - can have reducer for any state
  // const counter = (state = 0, action) =>{
  //   switch(action.type){
  //     case "INCREMENT":
  //       return state + 1;
  //     case "DECREMENT":
  //       return state - 1;
  //   }
  // }
  
  // let store = createStore(counter);
  
  // //Display in console
  // store.subscribe(() => console.log(store.getState()));
  
  // //Dispatch - calling the action
  // store.dispatch(increment());
  // store.dispatch(decrement());
  // store.dispatch(decrement());