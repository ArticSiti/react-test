import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Header from './../src/components/header';
import Content from './../src/components/content';
import reportWebVitals from './reportWebVitals';

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
const content = ReactDOM.createRoot(document.getElementById('content'));
content.render(
    <React.StrictMode>
        <Content />
    </React.StrictMode>
);

reportWebVitals();
