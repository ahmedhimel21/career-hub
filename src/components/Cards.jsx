import React from 'react';

const Cards = ({cards}) => {
  const {category_logo,category_name,jobs_available} =cards;
  console.log(cards)
  return (
    <div className='bg-purple-50 w-80 h-60 p-10'>
  <img className='w-10 h-10 object-cover mb-8 text-purple-100' src={category_logo} alt="cards_image" />
      <h1 className='text-2xl font-bold mb-2'>{category_name}</h1>
      <p>{jobs_available}</p>
    </div>
  );
};

export default Cards;