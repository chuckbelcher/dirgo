import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css'
import "./app/layout/App.css";
//import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(<App />, rootEl );
}


if (module.hot) {
  module.hot.accept('./app/layout/App', function() {
    setTimeout(render);
  });
}

render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
