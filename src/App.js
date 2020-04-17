import React from 'react';

import GlobalStyle from './styles/global';
import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      <MovieProvider>
        <MovieList />
        <GlobalStyle/>
      </MovieProvider>
    </>
  );
}

export default App;
