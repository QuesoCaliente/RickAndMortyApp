import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Box,
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
      role="group"
      minW={isHorizontal ? '300px' : 'initial'}
      width={isHorizontal ? '100%' : '300px'}
      height={'458px'}
      direction={{ base: 'column', sm: 'column' }}
      style={{ transformStyle: 'preserve-3d', transition: 'all 1s linear' }}
      position="relative"
      variant="outline"
    >
      <Box
        _groupHover={{
          transform: 'rotateY(180deg)',
          transition: 'all .5s linear !important',
        }}
        width="100%"
        height="100%"
        style={{ backfaceVisibility: 'hidden', transition: 'all 1s linear' }}
        position="absolute"
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
      </Box>
      <Box
        transform={'rotateY(180deg)'}
        _groupHover={{
          transform: 'rotateY(0deg)',
          transition: 'all .5s linear !important',
        }}
        style={{ backfaceVisibility: 'hidden', transition: 'all 1s linear' }}
        width="100%"
        height="100%"
        bgColor="teal.700"
        position="absolute"
        backgroundImage="url('/backface.png')"
        backgroundSize="contain"
      ></Box>
    </Card>
  );
}
