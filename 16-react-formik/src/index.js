import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* Artık router ayarlamaları butun proje icin gecerli oldu. */}
    <App />
  </BrowserRouter>
);



/*
Bu proje icin 
npm i react-router-dom@6   komutuyla rreact router kutuphanesi
npm install formik --save    komutuyla react formik kutuphanesi ve bu formun validasyonlarıı yapabilmek icin 
npm i yup    komutuyla yup kutuphanesini projeme ekledim. package.json da bu dosyalar gorulebilir.
 */


reportWebVitals();
