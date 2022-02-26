import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "../actions/action";
import "../styles/App.css"
function App() {
const mystate = useSelector((state)=>state.ChangeNum)
const dispatch = useDispatch(); 
return (
    <div id='main'>
          <h1>{mystate}</h1>
          <button onClick={() => dispatch(incNumber()) }>+</button>
          
          <button onClick={() => dispatch(decNumber()) }>-</button>
    </div>
  );
}

export default App;
