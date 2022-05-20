import React from 'react';

const Product = ({id,image,name,price}) => {
  
  return <article className='product'>
    <img src={image ? image.url : '' } alt={name ? name : '' } />
    <h4>{name ? name : '' }</h4>
    <p>{price ? '$'+price : '' }</p>
  </article>;
};

export default Product;
