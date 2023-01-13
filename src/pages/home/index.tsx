import styles from './home.module.css';
import CharacterList from '@components/characterList';
import Search from '@components/search';
import Select from '@components/select';
import { GENDER_OPTIONS, STATUS_OPTIONS } from './const';
import { useChracter } from '../../hooks/useCharacter';
import { useMemo, useEffect } from 'react';
import Loading from '@components/loading';
import useWindowPosition from '@utils/hooks/useWindowPosition';

export default function Home() {
  const {
    setSearch,
    setGender,
    setStatus,
    status,
    refetch,
    data,
    isFetchingNextPage,
    isRefetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    error,
  } = useChracter();

  const position = useWindowPosition();
  useEffect(() => {
    if (position > 80 && hasNextPage) {
      fetchNextPage();
    }
  }, [position]);

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
      {(isFetchingNextPage || isLoading || isRefetching) && <Loading />}
      {status === 'error' && <div className={styles.error}>{`${error}`}</div>}
    </main>
  );
}
