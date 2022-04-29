import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../Actions';
import { decrement } from '../Actions';
import { logged } from '../Actions';

export default function Abc() {
  const counter = useSelector(state => state.counter);
  const isLogg = useSelector(state=> state.log)
  const dispatch = useDispatch();
  return (
    <div className='text-center text-xl font-serif'>
      <h2>Counter {counter} </h2>
      <button 
      onClick={()=> dispatch(increment())}
      
      >+</button><br />
      <button 
      onClick={()=> dispatch(decrement())}

      >-</button><br />
      <button onClick={()=>dispatch(logged())}>{isLogg ? "hello":"Not logged in"} </button>
    </div>
  )
}
