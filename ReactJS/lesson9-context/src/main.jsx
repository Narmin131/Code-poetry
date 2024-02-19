import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/style.scss';
import './assets/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import { ProductProvider } from './context/ProductContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
)
