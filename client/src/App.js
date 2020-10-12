import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard'
import { Switch, Route, Link } from 'react-router-dom';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <Switch>
      
      <SavedList list={[ /* This is stretch */]} />
      
      <Route path='/movie/:id'>
        <Movie movies={MovieList}/>
      </Route>
      <Route path="/">
        <MovieList />
      </Route>
      </Switch>
     
    </div>
  );
}
