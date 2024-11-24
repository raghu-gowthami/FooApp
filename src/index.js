import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MapFilter from './Components/MapFilter';
import UseDemo from './Components/UseDemo';
import UseDemo1 from './Components/UseDemo1';
import EducatorMap from './Components/EducatorMap';
import UseEffDemo from './Components/UseEffDemo';
import App1 from './Components/App1';
import UseReducerDemo from './Components/UseReducerDemo';
import Nav from './Components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MapFilter/> */}
    {/* <UseDemo/> */}
    {/* <UseDemo1/> */}
    {/* <EducatorMap/> */}
    {/* <UseEffDemo/> */}
    {/* <App1/> */}
    {/* <UseReducerDemo/> */}
    <Nav/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
