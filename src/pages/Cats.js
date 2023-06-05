import {useEffect, useState} from 'react';
import { v4 } from 'uuid';
import Cat from '../components/Cat';
import AddCat from '../components/AddCat';
import EditCat from '../components/EditCat';
import RadioBtns from '../components/utility/RadioBtns';
import catArray from '../assets/data';


function Cats() {

  const [word, setWord] = useState('');
  const [field, setField] = useState('');
  const [foundCats, setFoundCats] = useState([]);
  const [cats, setCats] = useState(catArray);
  
  const radioData = {title: 'Search Fields', options: ['Name', 'Fur Pattern', 'Favorite Color'], field: field};
  
  useEffect(() => {
    if (word === '') {
      setFoundCats(cats);
    } else {
        let filteredCats = []

        if(field === radioData.options[0]) {
          filteredCats = cats.filter((cat) => //creates new array from filtered elements
              cat.name.toLowerCase().includes(word.toLowerCase()) //filter for elements
          );
        } else if(field === radioData.options[1]) {
          filteredCats = cats.filter((cat) => //creates new array from filtered elements
              cat.furPattern.toLowerCase().includes(word.toLowerCase()) //filter for elements
          );
        } else if(field === radioData.options[2]) {
          filteredCats = cats.filter((cat) => //creates new array from filtered elements
              cat.favoriteColor.toLowerCase().includes(word.toLowerCase()) //filter for elements
          );
      }
      setFoundCats(filteredCats); //set filtered words to foundWords state
    }
  }, [ word ]);


  function fieldChange(newField) {
    setField(newField);
  }

  function addCat(img, name, furPattern, favoriteColor) {
    const newCat = {
      id: v4(),
      img: img,
      name: name,
      furPattern: furPattern,
      favoriteColor: favoriteColor
    };
    
    setCats([...cats, newCat]);
  }

  function updateCat(id, newName, newFurPattern, newFavoriteColor) {
    const updatedCat = cats.map((cat) => {
      if(id === cat.id) return {...cat, name: newName, furPattern: newFurPattern, favoriteColor: newFavoriteColor};
      else return cat;
    });

    setCats(updatedCat);
  }



  return ( 
    <>
      <form className='bg-purple-900 p-10 rounded-lg flex flex-col items-center m-auto text-white'>
        <div className="form-group">
          <label htmlFor="inputSearchWord">Search by word:</label>
          <input type="text" className="form-control" id="inputSearchWord" value={word}
          onChange={(e) => {setWord(e.target.value);}}/>
        </div>
        <RadioBtns {...radioData} fieldChange={fieldChange}/>
      </form>
      <div className='flex flex-wrap justify-center items-center'>
        {
          foundCats.map((cat) => {
            const editCat = <EditCat {...cat} updateCat={updateCat}/>
            
            return(
              <div key={cat.id} className='w-full sm:w-1/2 md:w-1/4 p-4'>
                <Cat {...cat} editCat={editCat}/>
              </div>
        )})}
      </div>
      <div className='flex flex-col items-center'>
          <AddCat addCat={addCat}/>
      </div>
    </>
  );
}


export default Cats;