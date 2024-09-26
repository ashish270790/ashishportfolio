import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Global CSS


// CSS Libraries
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'animate.css/animate.min.css'; // Animate.css

import WOW from 'wowjs';




// Bootstrap Icons (CSS)
import 'bootstrap-icons/font/bootstrap-icons.css';

//mdb matreial ui-kit  Font Awesome (CSS)
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
      <App />    
  </React.StrictMode>
);
