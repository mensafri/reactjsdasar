import React from 'react';
import ReactDOM from 'react-dom/client';
// import Lifecycle from './reactjsdasar/Lifecycle';
// import Map from './reactjsdasar/Map.js'
// import StateProps from './reactjsdasar/StateProps';
// import App from './App';
// import Variable from './reactjsdasar/Variable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Variable/> */}
    {/* <StateProps/> */}
    {/* <Map/> */}
    {/* <Lifecycle/> */}
    <Crud/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
