import React, { useEffect, useState } from 'react';
// import './App.css';
import MovieCard from './MovieCard'
import '../../src/components/MovieList.css'
import ReactStars from "react-rating-stars-component";


function MovieList(props) {

  return (
    <div className="MovieList">
      
      {props.movies.map(el => <MovieCard
      title ={el.title}
      description = {el.description}
      posterUrl = {el.posterUrl}
      rate = {<ReactStars value = {el.rate} isHalf={true}/>}
      />)}
      
    </div>
  );
}

export default MovieList;
