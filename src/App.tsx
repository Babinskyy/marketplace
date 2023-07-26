import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <Home/>
      <Searchbar/>
    </div>
  );
}

export default App;
