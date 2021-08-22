import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.jsx';
import Context from './context/Context.js';

ReactDOM.render(<Context><App /></Context>, document.getElementById('root'))