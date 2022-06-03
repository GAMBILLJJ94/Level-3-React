import React from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
reportWebVitals();


// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

const Header = (
    <h1 className="header" >Header here</h1>
)

// const root = createRoot.render(document.getElementById('root'));

createRoot.render(Header, document.getElementById("root"))
