import React, { useEffect, useState, useCallback, useMemo } from "react";

import { List } from "./List";
import { Button } from "./Button";

// https://reactjs.org/docs/react-api.html
// memo - for when you want to AVOID RENDERS when parent renders (usually)
// useCallback - used to remember a function through different renders
// useMemo - used to remember a value through different renders

export const App = () => {
  console.log("App rendered");

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      const todos = await res.json();

      setTodos(todos);
    })();
  }, []);

  const items = useMemo(
    () => todos.map(todo => ({ id: todo.id, text: todo.title })),
    [todos],
  );

  const incrementButton = useMemo(
    () => (
      <Button name="increment" onClick={() => setCount(count => count + 1)}>
        increment
      </Button>
    ),
    [setCount],
  );

  const decrement = useCallback(() => setCount(count => count - 1), [setCount]);

  return (
    <div>
      <p>count: {count}</p>
      {incrementButton}
      <Button name="decrement" onClick={decrement}>
        decrement
      </Button>
      <List items={items} />
    </div>
  );
};
