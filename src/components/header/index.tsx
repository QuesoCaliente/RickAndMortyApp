import React from 'react';
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  FlexProps,
} from '@chakra-ui/react';
import logo from '@assets/logo.png';

const NavBar = (props: FlexProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <img width={50} height={50} src={logo} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({
  children,
  to = '/',
  ...rest
}: {
  children: React.ReactNode;
  to?: string;
}) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-around', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Inicio</MenuItem>
        <MenuItem to="#">Favoritos</MenuItem>
        <MenuItem to="#">Contacto</MenuItem>
        <MenuItem to="#">
          <Button size="sm" rounded="md" colorScheme={'blackAlpha'}>
            Iniciar sesión
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      w="100%"
      p={2}
      bg={'teal.500'}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        maxW="container.lg"
        mx="auto"
        wrap="wrap"
      >
        {children}
      </Flex>
    </Box>
  );
};

export default NavBar;
