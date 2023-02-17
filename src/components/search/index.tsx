import { useEffect, useState } from 'react';
import styles from './search.module.css';
import { Button, Input, Stack } from '@chakra-ui/react';

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
    <form onSubmit={handleSubmit}>
      <Stack
        bg={'white'}
        w={'100%'}
        p={3}
        spacing={4}
        boxShadow={'lg'}
        direction={['column', 'column', 'column', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
        rounded={'xl'}
      >
        <Input
          bg="none"
          border="none"
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          placeholder="nombre del personaje..."
        />
        <Button
          width={['100%', '100%', 'initial', 'initial']}
          type="submit"
          colorScheme={'teal'}
        >
          Buscar
        </Button>
      </Stack>
    </form>
  );
}
