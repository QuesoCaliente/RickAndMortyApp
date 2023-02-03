import { FaTable } from 'react-icons/fa';
import {
  BsFillArrowRightSquareFill,
  BsFillArrowDownSquareFill,
} from 'react-icons/bs';
import styles from './cardType.module.css';
import { useEffect, useState } from 'react';

type CardTypeProps = {
  onChange?: (value: 'left' | 'table' | 'grid') => void;
};

type ActiveType = 'left' | 'table' | 'grid';

export default function CardType({ onChange }: CardTypeProps) {
  const [active, setActive] = useState<ActiveType>('grid');

  useEffect(() => {
    onChange && onChange(active);
  }, [active]);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setActive('table')}
        className={active === 'table' ? styles.active : undefined}
      >
        <FaTable size={20} />
      </button>
      <button
        onClick={() => setActive('left')}
        className={active === 'left' ? styles.active : undefined}
      >
        <BsFillArrowRightSquareFill size={20} />
      </button>
      <button
        onClick={() => setActive('grid')}
        className={active === 'grid' ? styles.active : undefined}
      >
        <BsFillArrowDownSquareFill size={20} />
      </button>
    </div>
  );
}
