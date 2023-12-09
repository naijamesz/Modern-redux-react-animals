import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log('Button was clicked!');
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {/* <button onClick={handleClick()}>Bad Event Handler</button> */}
      <button onClick={() => setCount(count ? count - 1 : count >= 0)}>Remove Animal</button>
      <button onClick={() => setCount(count * 0)}>Reset</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}
