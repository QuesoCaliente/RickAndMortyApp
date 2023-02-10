import CharacterCard from '@components/characterCard';
import Table from '@components/table';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import useWindowPosition from '@utils/hooks/useWindowPosition';
import { useEffect, useRef, useState } from 'react';
import styles from './characterList.module.css';

interface ICharacterList {
  characters: any[];
  nextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
  hasNextPage: boolean | undefined;
  type: 'left' | 'table' | 'grid';
}

export default function CharacterList({
  characters,
  type,
  hasNextPage,
  nextPage,
}: ICharacterList) {
  console.log(characters);
  if (type === 'grid') {
    return (
      <Grid
        characters={characters}
        hasNextPage={hasNextPage}
        nextPage={nextPage}
      />
    );
  }
  if (type === 'left') {
    return (
      <Left
        hasNextPage={hasNextPage}
        nextPage={nextPage}
        characters={characters}
      />
    );
  }

  return (
    <Table
      hasNextPage={hasNextPage}
      nextPage={nextPage}
      characters={characters}
    />
  );
}

const Grid = ({
  characters,
  hasNextPage,
  nextPage,
}: {
  characters: any[];
  nextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
  hasNextPage: boolean | undefined;
}) => {
  const scrollPosition = useWindowPosition();
  useEffect(() => {
    if (scrollPosition > 80 && hasNextPage) {
      nextPage();
    }
  }, [scrollPosition]);
  return (
    <div className={styles.grid}>
      {characters &&
        characters.map(character => {
          return <CharacterCard key={character.id} {...character} />;
        })}
    </div>
  );
};

const Left = ({
  characters,
  hasNextPage,
  nextPage,
}: {
  characters: any[];
  hasNextPage: boolean | undefined;
  nextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
}) => {
  const scrolleableElementRef = useRef<HTMLDivElement>(null);
  const [scrollPercentaje, setScrollPercentaje] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollWidth, clientWidth, scrollLeft } =
        scrolleableElementRef.current!;
      setScrollPercentaje((scrollLeft / (scrollWidth - clientWidth)) * 100);
    };
    scrolleableElementRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      scrolleableElementRef.current?.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    if (scrollPercentaje > 80 && hasNextPage) {
      nextPage();
    }
  }, [scrollPercentaje]);

  return (
    <>
      <div ref={scrolleableElementRef} className={styles.left}>
        {characters &&
          characters.map(character => {
            return (
              <CharacterCard isHorizontal key={character.id} {...character} />
            );
          })}
      </div>
    </>
  );
};
