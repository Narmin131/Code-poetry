import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import {Provider} from 'react-redux';
import store from './store';
import AppUseImperativeHandle from './AppUseImperativeHandle';
import AppUseMemo from './AppUseMemo';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppUseMemo />
    </Provider>
  </React.StrictMode>,
)
