import React from 'react';
import puppyData from './data/puppy-data';
import './image-display.css';

const Puppy = () => {
  const displayPuppies = puppyData.map(puppy => {
    const { id, image } = puppy;
    return <img src={image} className='app-img' alt='' key={id} />
  })
  return (
    <section>
      <h1>Puppy Photos! Woof</h1>
      {displayPuppies}
    </section>
  )
}

export default Puppy;