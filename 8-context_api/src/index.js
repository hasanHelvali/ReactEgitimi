import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from './context/Task'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    {/* Ilgili provider butun uygulamada gecerli olacak sekilde suan uygulandı. */}
      <App />
  </Provider>
);

reportWebVitals();
