import { useEffect, useState } from "react";

import { Todo } from "./types/todo";
import { fetchTodos } from "./api/api";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((response) => {
      setTodos(response);
    });
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
