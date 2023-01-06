import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading_container}>
      <img className={styles.image} src="/portal.gif" alt="loading" />
      <span className={styles.loading_text}>Cargando...</span>
    </div>
  );
}
