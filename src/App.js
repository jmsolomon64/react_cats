import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Cats from './pages/Cats';
import Dictionary from './pages/Dictionary';


function App() {
  return ( 
    <BrowserRouter className="App">
      <Header>
        <Routes>
          <Route path="/cats" element={<Cats/>}/>
          <Route path="/vocab" element={<Dictionary/>}/>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
