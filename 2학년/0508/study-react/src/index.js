import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './reduce';

import Router from './pages/Router';

import './reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
