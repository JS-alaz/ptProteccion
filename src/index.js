import React from 'react';
import ReactDOM from 'react-dom/client';
import { SuperHeroApp } from './SuperHeroApp';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
// import '../src/components/SuperHero.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SuperHeroApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

