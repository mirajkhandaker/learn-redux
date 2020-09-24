import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Sign In</button>
      { isLogged ? <h1>Authorized content</h1> : <h1>Please Login</h1>}
    </div >
  );
}

export default App;
