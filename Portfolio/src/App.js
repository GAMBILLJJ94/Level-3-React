import './App.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHtml5,FaCss3,FaJsSquare,FaReact, FaPython, FaFlagUsa } from "react-icons/fa";
import babelConfig from './babel.config';
import babelPluginMacrosConfig from './babel-plugin-macros.config';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio'

function App() {
  return (
    <div className="App">

      <Navbar  />

      <header className="header">
        <h1>
          Hello my name is Joseph Gambill
        </h1>

        <h3>I am Software Developer</h3>
      </header>

      {/* <div className="chat-notification">
            <div className="chat-notification-logo-wrapper">
              <img className="chat-notification-logo" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="ChitChat Logo"/>
            </div>
            <div className="chat-notification-content">
              <h4 className="chat-notification-title">Welcome</h4>
              <p className="chat-notification-message">To the Thunder Dome</p>
            </div>
      </div> */}

      <AboutMe />

      <Portfolio />

      <div  className='icons'>
            <FaHtml5  className='icon' />
            <FaCss3  className='icon' />
            <FaJsSquare  className='icon' />
            <FaReact  className='icon' />
            <FaPython  className='icon' />
            <FaFlagUsa  className='icon' />
            
      </div>

    </div>
  );
}

export default App;
