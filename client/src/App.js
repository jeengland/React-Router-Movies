import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    if (!savedList.includes(movie)) {
      setSavedList( [...savedList, movie] );
    }
  };
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route path="/movie/:id"> 
        <Movie addToSavedList={addToSavedList}/>
      </Route>
    </div>
  );
};

export default App;
