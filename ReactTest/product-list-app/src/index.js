import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import global CSS
import App from './App'; // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the App component inside the 'root' div in index.html
);
