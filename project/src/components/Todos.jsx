import React, { useReducer } from "react";
import {initialState, reducer} from '../reducers/reducer';


export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ul>
      {state.map(item => (
        <li key={item.id}>
          <button>Complete</button>
          <button>Outstanding</button>
          {item.item}
        </li>
      ))}
    </ul>
  );
}