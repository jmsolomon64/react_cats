import {useState} from 'react';
import { v4 } from 'uuid';
import Cat from '../components/Cat';
import AddCat from '../components/AddCat';
import EditCat from '../components/EditCat';


function Cats() {

  const [cats, setCats] = useState([
    {
      id: 0,
      img: '',
      name: "Juno",
      furPattern: "Dark brown and black fur speckled with lighter shades of brown and orange.",
      favoriteColor: "Purple"
    },
    {
      id: 1,
      img: '',
      name: "Luna",
      furPattern: "Light brown and gray splotches on white fur.",
      favoriteColor: "Pink"
    },
    {
      id: 2,
      img: '',
      name: "Gerald",
      furPattern: "Shades of light gray layered on each other, with darker grey stripes",
      favoriteColor: "ForestGreen"
    },
    {
      id: 3,
      img: '',
      name: "Inky",
      furPattern: "Shades of dark gray layered on each other, with black spots and strips.",
      favoriteColor: "LightSkyBlue"
    },
    {
      id: 4,
      img: '',
      name: "Riley",
      furPattern: "White underbelly and socks with grey and black striped legs and splotches of orange, white, and brown throughout.",
      favoriteColor: "Orange"
    },
    {
      id: 5,
      img: '',
      name: "Gus",
      furPattern: "Orange on top, with a white belly, back tube socks, and front ankle socks.",
      favoriteColor: "LightGray"
    }
  ]);


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
        <div className='flex flex-wrap justify-center items-center'>
            {
                cats.map((cat) => {
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