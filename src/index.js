import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './component/navbar.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.Fragment>
    <NavigationBar />
  </React.Fragment>,
  document.getElementById('root')
);
