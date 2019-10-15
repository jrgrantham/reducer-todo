import React, { useReducer } from "react";
import uuid from "uuid";

const initialTodoState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];
const initialState = {
  todos: initialTodoState,
  addItem: ""
};

const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
const ON_SUBMIT = "ON_SUBMIT";
const ON_COMPLETE = "ON_COMPLETE";

function reducer(state, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return { ...state, ...action.payload };
    case ON_SUBMIT:
      return {
        ...state,
        todos: state.todos.concat({
          item: state.addItem,
          completed: false,
          id: Date.now()
        }),
        addItem: ""
      };
    case ON_COMPLETE:
      return { ...state, todos: state.todos.map(todo => {
        if (action.payload.id !== todo.id) {
          return todo;
        } return {...todo, completed: action.payload.complete}
      })};
    default:
      return state;
  }
}

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onchangeInput = event => {
    dispatch({
      type: ON_INPUT_CHANGE,
      payload: { [event.target.name]: event.target.value }
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch({
      type: ON_SUBMIT
    });
  };
  const onComplete = (id, complete) => event => {
    event.preventDefault();
    dispatch({
      type: ON_COMPLETE,
      payload: { id, complete }
    });
  };

  return (
    <div>
      <div>
        <label>New item</label>
        <input
          name="addItem"
          onChange={onchangeInput}
          value={state.addItem}
          type="text"
        />
        <button onClick={onSubmit}>Add item</button>
      </div>
      <ul>
        {state.todos.map(item => (
          <li key={item.id}>
            <button onClick={onComplete(item.id, true)}>Complete</button>
            <button onClick={onComplete(item.id, false)}>Outstanding</button>
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
}
