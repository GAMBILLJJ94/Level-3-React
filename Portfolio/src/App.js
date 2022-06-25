import './App.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHtml5,FaCss3,FaJsSquare,FaReact, FaPython, FaFlagUsa } from "react-icons/fa";
import babelConfig from './babel.config';
import babelPluginMacrosConfig from './babel-plugin-macros.config';

function App() {
  return (
    <div className="App">

      <Navbar  />

      <header className="header">
        <h1>
          Hello my name is Joseph Gambill
        </h1>
          <h3>And I am Software Developer</h3>
      </header>

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
