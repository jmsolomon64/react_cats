import './index.css';
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
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
       onClick={() => setShowCats(!showCats)}>Show cats</button>
      <p>Hello there</p>
      <div className='flex flex-wrap'>
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
    </div>
  );
}

export default App;
