import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CharProvider } from './Context/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <CharProvider>
      <App />
    </CharProvider>
  </BrowserRouter>
);


