import React, { useReducer } from "react";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

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
