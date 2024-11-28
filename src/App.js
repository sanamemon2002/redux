import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Component/Counterslice";

  const App = () => {
   
    const count = useSelector((state) => state.counter.value);
  
   
    const dispatch = useDispatch();
  
    return (
      <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Redux Counter App</h1>
        <h2>Counter Value: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())} style={{ margin: "0 10px" }}>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      </>
    );
  };

export default App;


