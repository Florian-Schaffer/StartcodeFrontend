import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const AppWithRouter = () => {
  return(
    <Router>
     <App facade = {facadee} />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));