import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import lang_es from './lang/Es/Es.json'
import lang_en from './lang/En/En.json'

//  init multi lenguaje library
i18next.init({
  interpolation:{ escapeValue: false},
  lng: localStorage.getItem("lang") ? localStorage.getItem("lang"):"es",
  resources:{
    es:{
      global: lang_es,
    },
    en:{
      global: lang_en,
    }
  }
})

//  main rendered component
ReactDOM.render( 
    <React.StrictMode >
    <I18nextProvider i18n={i18next}>
    <App/>
    </I18nextProvider>
    </React.StrictMode>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();