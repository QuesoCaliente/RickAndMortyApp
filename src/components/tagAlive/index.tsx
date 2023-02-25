import { Box, Flex, Text } from '@chakra-ui/react';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

interface TagAlive {
  alive: 'Alive' | 'Dead' | 'unknown';
}

interface TagGender {
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
}

const genderIcon = {
  Female: {
    icon: <BsGenderFemale title="female-icon" size={20} color="#F9A8D4" />,
    bg: 'pink.100',
    secondaryBg: 'pink.200',
    color: 'pink.600',
  },
  Male: {
    icon: <BsGenderMale title="male-icon" size={20} color="#93C5FD" />,
    bg: 'blue.100',
    secondaryBg: 'blue.200',
    color: 'blue.600',
  },
  Genderless: {
    icon: <BsGenderMale title="genderless-icon" size={20} color="#93C5FD" />,
    bg: 'blue.100',
    secondaryBg: 'blue.200',
    color: 'blue.600',
  },
  unknown: {
    icon: <BsGenderMale title="unknown-icon" size={20} color="#93C5FD" />,
    bg: 'blue.100',
    secondaryBg: 'blue.200',
    color: 'blue.600',
  },
};

export function TagGender({ gender }: TagGender) {
  const genderTranslate = {
    Female: 'Femenino',
    Male: 'Masculino',
    Genderless: 'Sin genero',
    unknown: 'Desconocido',
  };

  return (
    <Flex w={'100%'} bg="pink.200">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg={genderIcon[gender].bg}
        p={2}
      >
        {genderIcon[gender].icon}
      </Box>
      <Box
        textAlign="center"
        p={2}
        w="100%"
        bg={genderIcon[gender].secondaryBg}
      >
        <Text
          fontWeight="semibold"
          color={genderIcon[gender].color}
          fontSize="xl"
        >
          {genderTranslate[gender]}
        </Text>
      </Box>
    </Flex>
  );
}

export function TagAlive({ alive }: TagAlive) {
  const translate = {
    Alive: 'Vivo',
    Dead: 'Muerto',
    unknown: 'Desconocido',
  };

  const AliveColors = {
    Alive: 'green.500',
    Dead: 'red.500',
    unknown: 'gray.500',
  };

  return (
    <Box
      borderBottomEndRadius="3xl"
      borderBottomStartRadius="3xl"
      textAlign="center"
      bg={AliveColors[alive]}
      p={2}
    >
      <Text color="white" fontSize="xl">
        {translate[alive]}
      </Text>
    </Box>
  );
}
