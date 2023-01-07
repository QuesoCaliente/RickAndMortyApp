import { getApiCharactersByNameStatusGender } from '@api/characters';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useChracter = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [gender, setGender] = useState('all');

  const query = useInfiniteQuery(
    ['characters'],
    ({ pageParam = 1 }) =>
      getApiCharactersByNameStatusGender(search, status, gender, pageParam),

    {
      staleTime: 1000 * 60 * 60,
      retry: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info?.next) {
          return pages.length + 1;
        }
      },
    }
  );

  return {
    ...query,
    setSearch,
    setStatus,
    setGender,
  };
};
