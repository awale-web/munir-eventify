import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/Home.css'; // <-- Add this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);