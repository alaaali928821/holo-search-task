import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider
import store from './redux/store'; // Import your Redux store
import App from './App';
import './index.css';

ReactDOM.render(
  // Wrap your App component with the Provider and pass the Redux store as a prop
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

