import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Projects from './Projects';
import Git from './Git';
import Skills from './Skills';
import Resume from './Resume';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Skills />
    <Git />
    <Projects />
    <Resume />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
