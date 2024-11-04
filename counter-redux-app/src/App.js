import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { incNum,decNum,addNum,divideNum,multiNum } from './actions';
import "./App.css"


function App() {
  const counter=useSelector((state)=>state.changeNum);
  const mul=useSelector((state)=>state.multi);
  const dispatch=useDispatch();

  return (
    <div className='App' >
     <h1 className='counterApp' >Counter App</h1>
     <h4>using React-Redux</h4>
<h2 className='counter' > {counter} </h2>
     <div className='div' >
<button className='button' type='Increment' onClick={()=>dispatch(incNum())}>Increment</button>

<button className='button' type='Decrement' onClick={ ()=>dispatch(decNum()) }>Decrement</button>

</div>
<div>
<button className='button' onClick={ ()=>dispatch(addNum(10)) }>Add Value</button>
</div>

<h1 className='counterApp' >Multiplication Counter</h1>
     <h4>using React-Redux</h4>
<h2 className='counter' > {mul} </h2>
     <div className='div' >
<button className='button' type='Increment' onClick={()=>dispatch(divideNum())}>/</button>

<button className='button' type='Decrement' onClick={ ()=>dispatch(multiNum()) }>*</button>

</div>
<div>

</div>
    </div>
  );
}

export default App;
