import React from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
reportWebVitals();


// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

function Header (){
    <h1 className="header" >Hello</h1>
}

const root = createRoot.render(document.getElementById('root'));

root.render(< Header />)
