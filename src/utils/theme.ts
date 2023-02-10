// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  initialColorMode: 'light',
  global: {
    styles: {
      body: {
        bg: 'red:100',
      },
    },
  },
  colors: {
    brand: {
      primary: '#439a97',
      secondary: '#62b6b7',
      tertiary: '#97dece',
      quaternary: '#cbedd5;',
      text: '#313131',
    },
  },
});

export default theme;
