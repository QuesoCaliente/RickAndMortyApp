import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import theme from './utils/theme';
import { TourProvider } from '@reactour/tour';

const steps = [
  {
    selector: '.filtrar_personaje_estado',
    content:
      'Puedes filtrar el personaje por el estado utilizando este selector',
  },
  {
    selector: '.filtrar_personaje_genero',
    content:
      'Puedes filtrar el personaje por el genero utilizando este selector',
  },
  {
    selector: '.filtrar_personaje_texto',
    content:
      'Puedes filtrar el personaje por el texto utilizando este campo de busqueda',
  },
  {
    selector: '.cambiar_modo_vista',
    content:
      'Puedes cambiar el modo de visualización de los personajes utilizando estos botones',
  },
];

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <TourProvider steps={steps}>
        <App />
      </TourProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
    <ColorModeProvider />
  </ChakraProvider>
);
