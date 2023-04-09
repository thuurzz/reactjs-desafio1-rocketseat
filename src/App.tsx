import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./global.css";

import { Header } from "./components/Header";
import { List } from "./components/List";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleMarkToDo(id: string) {
    const index = todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedItems = [...todos];
      updatedItems[index].isCompleted = !updatedItems[index].isCompleted;
      setTodos(updatedItems);
    }
  }

  function handleCreate(text: string) {
    const newToDo: Todo = { id: uuidv4(), text: text, isCompleted: false };
    setTodos([...todos, newToDo]);
  }

  function handleDeleteToDo(id: string) {
    const toDoListWithoutDeletedOne = todos.filter((todo) => todo.id !== id);
    setTodos(toDoListWithoutDeletedOne);
  }

  return (
    <>
      <Header handleCreate={handleCreate} />
      <List
        todos={todos}
        handleDeleteToDo={handleDeleteToDo}
        handleMarkToDo={handleMarkToDo}
      />
    </>
  );
}

export default App;
