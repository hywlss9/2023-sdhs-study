import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './pages/Router';

import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>,
);
