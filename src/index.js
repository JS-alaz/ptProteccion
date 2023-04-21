import React from 'react';
import ReactDOM from 'react-dom/client';
import { SuperHeroApp } from './SuperHeroApp';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import '../src/components/SuperHero.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SuperHeroApp />
    </Provider>
  </React.StrictMode>
);

