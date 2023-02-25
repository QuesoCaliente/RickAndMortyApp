import { Box, Image, Text } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      bgColor="rgba(0, 0, 0, 0.5)"
      zIndex={999}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
    >
      <Image width="100px" height="100px" src="/portal.gif" alt="loading" />
      <Text color="white" fontSize="md" mt={3}>
        Cargando...
      </Text>
    </Box>
  );
}
