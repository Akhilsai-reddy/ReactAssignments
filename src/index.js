import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './Assignment2/App';
// import App from './Assignment3/App';
// import App from './Assignment4/Components/App';
import App from './Assignment5/Components/App';
// import App from './Assignment6/Components/App';
// import App from './Assignment7/App';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Assignment6/Components/Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
