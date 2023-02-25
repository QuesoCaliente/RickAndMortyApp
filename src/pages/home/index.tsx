import CharacterList from '@components/characterList';
import Search from '@components/search';
import Select from '@components/select';
import { GENDER_OPTIONS, STATUS_OPTIONS } from './const';
import { useChracter } from '../../hooks/useCharacter';
import { useMemo, useState } from 'react';
import Loading from '@components/loading';
import CardType from '@components/cardType';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';

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

  const characters = useMemo(() => {
    return data?.pages.map(page => page.results).flat() || [];
  }, [data]);

  const [type, setType] = useState('grid');

  return (
    <Flex
      as="main"
      maxW="container.lg"
      mx="auto"
      pt="50px"
      flexDirection="column"
      gap="20px"
    >
      <Search onClick={() => refetch()} onSearch={value => setSearch(value)} />
      <Stack direction={['column', 'column', 'row', 'row']}>
        <Select onChange={value => setGender(value)} options={STATUS_OPTIONS} />
        <Select onChange={value => setStatus(value)} options={GENDER_OPTIONS} />
        <CardType onChange={value => setType(value)} />
      </Stack>
      <Box>
        {status === 'success' && (
          <CharacterList
            hasNextPage={hasNextPage}
            nextPage={fetchNextPage}
            type={type as 'table' | 'grid' | 'left'}
            characters={characters}
          />
        )}
      </Box>
      {(isFetchingNextPage || isLoading || isRefetching) && <Loading />}
      {status === 'error' && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Ha ocurrido un error</AlertTitle>
          <AlertDescription>{`${error}`}</AlertDescription>
        </Alert>
      )}
    </Flex>
  );
}
