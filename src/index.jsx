import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store, {persistor} from './store/index'
import { PersistGate } from 'redux-persist/integration/react'
// import Loading from './components/Loading/Loading'

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
), document.getElementById('root'));

