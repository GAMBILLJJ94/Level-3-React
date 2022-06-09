import './App.css';
import Card from './Card'
import data from './data.js'


const cards = data.map(item => {
  return (
      <Card
          key={item.id}
          item={item}
      />
  )
}) 

export default function App() {
  
 
  return (
    <div className="App">
      <div className="navbar">
      <a><strong>Start Bootstrap</strong></a>
      </div>
      <div className="rightSideNav">
      <a>HOME</a>
      <a>ABOUT</a>
      <a>SAMPLE POST</a>
      <a>CONTACT</a>
      </div>
        <nav className="bootstrap"></nav>
        <img className="backgroundImg"></img>
      <section>

        {cards}

      </section>

      
    </div>
  );
}