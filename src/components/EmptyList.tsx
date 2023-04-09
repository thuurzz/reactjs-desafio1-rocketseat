import { Checks } from "phosphor-react";
import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <>
      <div className={styles.text}>
        <Checks size={128} />
        <h2>Muito bem, sem tarefas para exibir!</h2>
      </div>
    </>
  );
}
