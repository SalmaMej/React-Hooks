import React from 'react';
import './MovieCard.css';

function MovieCard({title, description, posterUrl, rate}) {
  return (
    <div>
      
      <div className="Card-container">
          <h2>{title}</h2>
          <div className ='img-container'>
              <img src ={posterUrl} alt ='movieImg' className='movieimage'/>
          </div>
          <div className='description'>
              <p>{description}</p>
          </div>
          <div className= 'rating'>
              <p>{rate}</p>
          </div>
      </div>
    </div>
  );
}

export default MovieCard;
