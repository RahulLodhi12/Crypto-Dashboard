import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './curr.css';
import reportWebVitals from './reportWebVitals';
// import Cal from './Cal';
// import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(<Cal />,document.getElementById('rrr'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
