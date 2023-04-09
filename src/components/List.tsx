import { Todo } from "../App";
import { CardToDo } from "../components/CardToDo";
import { EmptyList } from "./EmptyList";
import styles from "./List.module.css";

type ListProps = {
  todos: Todo[];
  handleDeleteToDo: (id: string) => void;
  handleMarkToDo: (id: string) => void;
};

export function List({ todos, handleDeleteToDo, handleMarkToDo }: ListProps) {
  const hasTodo = todos ? todos : [];

  const quantityOfToDos = hasTodo.length;

  const quantityOfToDosChecked = hasTodo.reduce((acc, cur) => {
    if (cur.isCompleted === true) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <>
      <div className={styles.list}>
        <div className={styles.labelBox}>
          <section className={styles.label}>
            Tarefas criadas
            <span className={styles.number}>{quantityOfToDos}</span>
          </section>
          <section className={styles.labelCountChecked}>
            Concluídas
            <span className={styles.number}>
              {quantityOfToDosChecked} de {quantityOfToDos}
            </span>
          </section>
        </div>
        <div className={styles.divider}></div>
        {hasTodo.length > 0 ? (
          hasTodo.map((todo) => (
            <CardToDo
              key={todo.id}
              todo={todo}
              handleDeleteToDo={handleDeleteToDo}
              handleMarkToDo={handleMarkToDo}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
}
