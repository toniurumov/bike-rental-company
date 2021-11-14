import React from 'react';
import ReactDOM from 'react-dom';
import List from './Components/List';
import CalculateTotal from './Components/CalculateTotal';
import ShowResult from "./Components/ShowResult";

ReactDOM.render(
  <React.StrictMode>

  <List></List><ShowResult></ShowResult>
  </React.StrictMode>,
  document.getElementById('root')
);
