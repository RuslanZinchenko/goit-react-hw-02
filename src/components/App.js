import React from 'react';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import Dashboard from './Dashboard/Dashboard';
import publications from '../publications.json';
import movies from '../movies.json';

const App = () => (
  <div>
    <Reader items={publications} step={1} index={0} />
    <hr />
    <MoviePage items={movies} />
    <hr />
    <Dashboard />
  </div>
);

export default App;
