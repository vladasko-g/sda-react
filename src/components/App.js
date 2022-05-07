import React, { useEffect, useState } from "react";

import { List } from "./List";
import { Button } from "./Button";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      const todos = await res.json();

      setTodos(todos);
    })();
  }, []);

  const items = todos.map(todo => ({ id: todo.id, text: todo.title }));

  return (
    <div>
      <p>count: {count}</p>
      <Button name="increment" onClick={() => setCount(count => count + 1)}>
        increment
      </Button>
      <Button name="decrement" onClick={() => setCount(count => count - 1)}>
        decrement
      </Button>
      <List items={items} />
    </div>
  );
};
