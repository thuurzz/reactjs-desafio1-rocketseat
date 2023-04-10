import { Todo } from "../App";
import { CheckCircle, RadioButton, Trash } from "phosphor-react";

import style from "./CardToDo.module.css";

type CardToDoProps = {
  todo: Todo;
  handleDeleteToDo: (id: string) => void;
  handleMarkToDo: (id: string) => void;
};

export function CardToDo({
  todo,
  handleDeleteToDo,
  handleMarkToDo,
}: CardToDoProps) {
  function handleDelete() {
    handleDeleteToDo(todo.id);
  }

  function handleChangeStatusOfToDo() {
    handleMarkToDo(todo.id);
  }

  return (
    <>
      <div className={style.card}>
          {todo.isCompleted ? (
            <CheckCircle
              onClick={handleChangeStatusOfToDo}
              className={style.checked}
              size={24}
            />
          ) : (
            <RadioButton
              onClick={handleChangeStatusOfToDo}
              className={style.unchecked}
              size={24}
            />
          )}
          <p className={style.textToDo}>{todo.text}</p>

        <Trash size={24} onClick={handleDelete}/>
      </div>
    </>
  );
}
