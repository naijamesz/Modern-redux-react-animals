import { useState } from 'react';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  // const [count, setCount] = useState(0);
  // const handleClick2 = () => {
  //   setCount(count + 1);
  //   console.log('Button was clicked!');
  // };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>

      <div>Number of animals: {animals}</div>
    </div>
  );
}
