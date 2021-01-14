import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, logIn, logOut} from './actions';


function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br></br>
        {/* Display Log in/out button based on isLogged state */}
        {!isLogged ? 
        <button onClick={() => dispatch(logIn())}>Log In</button> 
        : <button onClick={() => dispatch(logOut())}>Log Out</button>}
      {isLogged ? <h3>If you are seeing this you are logged in </h3> : ""}
    </div>
  );
}

export default App;
