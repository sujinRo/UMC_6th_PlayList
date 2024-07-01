import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import '../src/styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
