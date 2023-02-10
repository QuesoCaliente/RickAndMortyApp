import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';
import { TagAlive, TagGender } from '@components/tagAlive';

export interface ICard {
  image: string;
  name: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  status: 'Alive' | 'Dead' | 'unknown';
  isHorizontal?: boolean;
}

export default function CharacterCard({
  image,
  name,
  gender,
  status,
  isHorizontal,
}: ICard) {
  return (
    <Card
      minW={isHorizontal ? '300px' : 'initial'}
      direction={{ base: 'column', sm: 'column' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%' }}
        src={image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody bg="teal.700">
          <Heading textAlign="center" color="teal.100" size="md">
            {name}
          </Heading>
        </CardBody>
        <CardFooter
          display="flex"
          flexDir="column"
          p={0}
          style={{ marginTop: 0 }}
        >
          <TagGender gender={gender} />
          <TagAlive alive={status} />
        </CardFooter>
      </Stack>
    </Card>
  );
}
