import { FaTable } from 'react-icons/fa';
import {
  BsFillArrowRightSquareFill,
  BsFillArrowDownSquareFill,
} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';

type CardTypeProps = {
  onChange?: (value: 'left' | 'table' | 'grid') => void;
};

type ActiveType = 'left' | 'table' | 'grid';

export default function CardType({ onChange }: CardTypeProps) {
  const [active, setActive] = useState<ActiveType>('grid');

  useEffect(() => {
    onChange && onChange(active);
  }, [active]);

  const activeStyle = {
    backgroundColor: '#62b6b7',
    color: '#f1f5f9',
  };

  return (
    <Flex
      className="cambiar_modo_vista"
      gap="1rem"
      alignItems="center"
      justifyContent={['center', 'center', 'flex-end', 'flex-end']}
      color="#334155"
      p="0.5rem"
      borderRadius="0.5rem"
      bgColor="#f1f5f9"
    >
      <Button
        title="tablebutton"
        color="#334155"
        colorScheme={active === 'table' ? 'teal' : 'gray'}
        onClick={() => setActive('table')}
        style={active === 'table' ? activeStyle : undefined}
      >
        <FaTable size={20} />
      </Button>
      <Button
        title="leftbutton"
        colorScheme={active === 'left' ? 'teal' : 'gray'}
        color="#334155"
        onClick={() => setActive('left')}
        style={active === 'left' ? activeStyle : undefined}
      >
        <BsFillArrowRightSquareFill size={20} />
      </Button>
      <Button
        title="gridbutton"
        colorScheme={active === 'grid' ? 'teal' : 'gray'}
        color="#334155"
        onClick={() => setActive('grid')}
        style={active === 'grid' ? activeStyle : undefined}
      >
        <BsFillArrowDownSquareFill size={20} />
      </Button>
    </Flex>
  );
}
