import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

let rootElement = document.getElementById('app');

if (!rootElement) {
  rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'app');
  document.body.appendChild(rootElement);
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/products">
      <App />
    </BrowserRouter>
  </StrictMode>
);
