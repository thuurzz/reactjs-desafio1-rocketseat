import { useState } from "react";
import styles from "./Form.module.css";
import { PlusCircle } from "phosphor-react";

type FormProps = {
  handleCreate: (text: string) => void;
};

export function Form({ handleCreate }: FormProps) {
  const [toDoText, setToDoText] = useState("");

  function handleCreateNewTodo() {
    event?.preventDefault();
    handleCreate(toDoText);
    setToDoText("");
  }

  function handleGetNewToDo(event: React.ChangeEvent<HTMLInputElement>) {
    setToDoText(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTodo} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={toDoText}
        onChange={handleGetNewToDo}
        required
      />
      <button className={styles.button} type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
