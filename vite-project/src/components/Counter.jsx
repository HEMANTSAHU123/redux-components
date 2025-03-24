import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Counter = () => {
    const dispatch=useDispatch();
    const counter=useSelector(state=>state.counter)

    const incrementhandler=()=>{
        dispatch({type:'increment'})
    };
    const decrementhandler=()=>{
        dispatch({type:'decrement'});


    }
    const togglecounterhandler=()=>{

    }
  return (
    <div>
        <h1>redux counter</h1>
        <div>{counter}</div>
        <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={decrementhandler}>decrement</button>
        </div>
      <button  onClick={togglecounterhandler}>toggle counter</button>
    </div>
  )
}

export default Counter
