import styles from './home.module.css';
import CharacterList from '@components/characterList';
import Search from '@components/search';
import Select from '@components/select';
import { GENDER_OPTIONS, STATUS_OPTIONS } from './const';
import { useChracter } from '../../hooks/useCharacter';
import { useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from '@components/loading';

export default function Home() {
  const {
    setSearch,
    setGender,
    setStatus,
    status,
    refetch,
    data,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useChracter();

  const scrollableRef = useRef(null);

  const { ref } = useInView({
    root: scrollableRef.current,
    threshold: 0,
    triggerOnce: false,
    onChange: inView => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    },
  });
  const characters = useMemo(() => {
    return data?.pages.map(page => page.results).flat() || [];
  }, [data]);

  return (
    <main className={styles.container}>
      <Search onClick={() => refetch()} onSearch={value => setSearch(value)} />
      <div className={styles.selects_container}>
        <Select onChange={value => setGender(value)} options={STATUS_OPTIONS} />
        <Select onChange={value => setStatus(value)} options={GENDER_OPTIONS} />
      </div>
      <div>
        {status === 'success' && <CharacterList characters={characters} />}
      </div>
      <div ref={ref}></div>
      {(isFetchingNextPage || isLoading) && <Loading />}
    </main>
  );
}
