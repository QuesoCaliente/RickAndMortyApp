import { useEffect, useState } from 'react';
import styles from './search.module.css';

interface ISearch {
  onSearch: (value: string) => void;
  onClick?: () => void;
}

export default function Search({ onSearch, onClick }: ISearch) {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    onSearch(value);
  }, [value]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <form className={styles.search_container} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        placeholder="nombre del personaje..."
        className={styles.search}
      />
      <button type="submit" className={styles.button}>
        Buscar
      </button>
    </form>
  );
}
