import React, { useEffect } from "react";
import styles from "./search.module.css";

interface ISearch {
  onSearch: (value: string) => void;
  onClick?: () => void;
}

export default function Search({ onSearch, onClick = () => {} }: ISearch) {
  const [value, setValue] = React.useState<string>("");

  useEffect(() => {
    onSearch(value);
  }, [value]);

  return (
    <div className={styles.search_container}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="nombre del personaje..."
        className={styles.search}
      />
      <button onClick={() => onClick()} className={styles.button}>
        Buscar
      </button>
    </div>
  );
}
