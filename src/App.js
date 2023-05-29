import './App.css';
import {useState} from 'react';
import Cat from './components/Cat';

function App() {

  const [showCats, setShowCats] = useState(false);

  const cats = [
    {
      name: "Juno",
      favoriteColor: "Purple"
    },
    {
      name: "Luna",
      favoriteColor: "Pink"
    },
    {
      name: "Gerald",
      favoriteColor: "Green"
    },
    {
      name: "Inky",
      favoriteColor: "Light blue"
    },
    {
      name: "Riley",
      favoriteColor: "Orange"
    }
  ];


  return (
    <div className="App">
      <button onClick={() => setShowCats(!showCats)}>Show cats</button>
      <p>Hello there</p>
      {
        showCats ? (
          cats.map((cat, index) => (
            <div key={index}>
              <Cat name={cat.name} favoriteColor={cat.favoriteColor}/>
            </div>
          ))
        ) : (
          <p>Nothing to see here.</p>
        )
      }
    </div>
  );
}

export default App;
