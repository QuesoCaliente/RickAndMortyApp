import styles from './home.module.css';
import CharacterList from '@components/characterList';
import Search from '@components/search';
import Select from '@components/select';
import { GENDER_OPTIONS, STATUS_OPTIONS } from './const';
import Loading from '@components/loading';
import { useChracter } from '../../hooks/useCharacter';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMemo } from 'react';

export default function Home() {
  const {
    setSearch,
    setGender,
    setStatus,
    status,
    refetch,
    data,
    hasNextPage,
    fetchNextPage,
  } = useChracter();

  const characters = useMemo(() => {
    console.log(data);
    return data?.pages.map(page => page.results).flat() || [];
  }, [data]);

  return (
    <main className={styles.container}>
      <Search onClick={() => refetch()} onSearch={value => setSearch(value)} />
      <div className={styles.selects_container}>
        <Select onChange={value => setGender(value)} options={STATUS_OPTIONS} />
        <Select onChange={value => setStatus(value)} options={GENDER_OPTIONS} />
      </div>
      <InfiniteScroll
        dataLength={characters.length}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Loading />}
        endMessage={<p className={styles.end_message}>No more characters</p>}
      >
        {characters && <CharacterList characters={characters} />}
      </InfiniteScroll>
    </main>
  );
}
