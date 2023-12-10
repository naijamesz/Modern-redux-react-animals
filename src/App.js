import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  //    animals = [ index0,index1,index2,index3,index4,index5,index6]
  //    animals = [ index0,index1,index2,...index6] ... is spread operator index4-5
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  const handleClear = () => {
    return setAnimals([]);
  };

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <button onClick={() => setAnimals([])}>Clear</button>
      <button onClick={handleClear}>Clear</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}
