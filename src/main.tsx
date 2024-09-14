import '../src/styles/index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000,
      refetchOnWindowFocus: false,
    },
  },
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />,
  </QueryClientProvider>,
  //</StrictMode>,
);
