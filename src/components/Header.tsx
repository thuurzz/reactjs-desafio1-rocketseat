import { Form } from "./Form";
import styles from "./Header.module.css";
import logoPNG from "../assets/Logo.png";

type HeaderProps = {
  handleCreate: (text: string) => void;
};

export function Header({ handleCreate }: HeaderProps) {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoPNG} />
      <Form handleCreate={handleCreate} />
    </header>
  );
}
