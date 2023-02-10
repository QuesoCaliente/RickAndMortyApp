import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import theme from './utils/theme';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
    <ColorModeProvider />
  </ChakraProvider>
);
