import styles from './header.module.css';
import logo from '@assets/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <div className={styles.logo}>
            <img src={logo} width={100} height={100} alt="logo" />
          </div>
          <ul>
            <MenuItem label="Inicio" to="/" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

const MenuItem = ({ label, to = '#' }: { label: string; to?: string }) => {
  return (
    <li>
      <a className={styles.link} href={to}>
        {label}
      </a>
    </li>
  );
};
