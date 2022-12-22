import React from 'react';
import './App.css';
import Game from './client/components/Game';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ marginTop: 0, fontFamily: 'Silkscreen,cursive' }}>Rock, Paper, Scissors</h1>
        <Game />
      </header>
    </div>
  );
}

export default App;
