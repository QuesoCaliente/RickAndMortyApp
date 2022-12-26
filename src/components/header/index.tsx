import styles from "./header.module.css";
import logo from "@assets/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <div className={styles.logo}>
          <img src={logo} width={100} height={100} alt="logo" />
        </div>
        <ul>
          <li>Inicio</li>
        </ul>
      </nav>
    </header>
  );
}
