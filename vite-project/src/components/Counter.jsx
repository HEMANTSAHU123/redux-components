import React from 'react'
import { counterActions } from '../store/counter';
import { useSelector,useDispatch } from 'react-redux'
const Counter = () => {
    const dispatch=useDispatch();
    const counter=useSelector((state)=>state.counter.counter)
const show=useSelector((state)=>state.counter.showCounter)
    const incrementhandler=()=>{
        dispatch(counterActions.increment())
    };
    const decrementhandler=()=>{
        dispatch(counterActions.decrement());


    }
    const increasehandler=()=>{
        dispatch(counterActions.increase(10))
    }
    const togglecounterhandler=()=>{
dispatch(counterActions.Toggle())
    }
  return (
    <div>
        <h1>redux counter</h1>
       {show && <div>{counter}</div>}
        <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={increasehandler}>increment by 5</button>
        <button onClick={decrementhandler}>decrement</button>
        </div>
      <button  onClick={togglecounterhandler}>toggle counter</button>
    </div>
  )
}

export default Counter
