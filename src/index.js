import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);