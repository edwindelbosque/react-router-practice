import React from 'react';
import './image-display.css';

const Creatures = ({ data }) => {
  const displayCreatures = data.map(creature => {
    const { id, image } = creature;
    return <img
      src={image}
      alt=''
      className='app-img'
      key={id} />
  })

  return (
    <>
      <h1>Creature photos!</h1>
      {displayCreatures}
    </>
  )
};

export default Creatures;