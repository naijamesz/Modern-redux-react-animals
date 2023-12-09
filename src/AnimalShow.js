import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

export default function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(-1);
  const handleClick = () => {
    console.log({ clicks });
    setClicks(clicks + 1);
  };
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' src={svgMap[type]} alt='animal' />
      <img className='heart' src={heart} alt='heart' style={{ width: 30 + 30 * clicks + `px` }} />
    </div>
  );
}
