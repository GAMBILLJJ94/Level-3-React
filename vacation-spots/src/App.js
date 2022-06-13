import data from './data'
import Card from './Card'
import './App.css';

const cards = data.map(item => {
  return (
      <Card
          key={item.id}
          item={item}
      />
  )
}) 

function App() {

  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
