import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Component/Counterslice";
import App1 from "./App1";
import CrudApp from "./Component/CrudApp";
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const crudSlice = createSlice({
  name: 'crud',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].text = action.payload.text;
      }
    },
  },
});


export const { addItem, removeItem, updateItem } = crudSlice.actions;


const store = configureStore({
  reducer: {
    crud: crudSlice.reducer,
  },
});


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

<App1 />

<Provider store={store}>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h1>CRUD Application</h1>
        <CrudApp />
      </div>
    </Provider>
      </>
    );
  };

export default App;


