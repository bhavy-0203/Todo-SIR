import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, get, removeTodo, toggleTodo } from "./redux/Action";

const App = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      task: task,
      isCompleted: false,
      id: Date.now(),
    };
    dispatch(addTodo(todo));
  };
  useEffect(() => {
    dispatch(get());
  }, []);
  const { todos } = useSelector((store) => store);
  console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" />
      </form>

      <hr />
      {/* {todos.map(({ id, task, isCompleted }) => (
        <div>
          <h1>{task}</h1>
          <button onClick={() => dispatch(toggleTodo(id))}>
            {isCompleted ? "Completed" : "pending"}
          </button>
          <button onClick={() => dispatch(removeTodo(id))}>remove</button>
        </div>
      ))} */}
    </div>
  );
};

export default App;
