import React, { useEffect, useState } from 'react';
import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

interface gameState {
  choice: 'Rock' | 'Paper' | 'Scissors' | null | undefined;
  computerChoice: 'Rock' | 'Paper' | 'Scissors' | null | undefined;
  score: number;
  winner: 'Rock' | 'Paper' | 'Scissors' | 'Tie!!!' | null | undefined | string;
}

function Game() {
  const [gameState, setGameState] = useState<gameState>({
    choice: null,
    computerChoice: null,
    score: 0,
    winner: null,
  });

  useEffect(() => {
    const scoreFromLocalStorage = localStorage.getItem('score');
    if (typeof scoreFromLocalStorage === 'string') {
      setGameState((prevState) => ({ ...prevState, score: parseInt(scoreFromLocalStorage) }));
    }
  }, []);

  function startRound(choice: any) {
    const computerChoice = randomChoice();
    setGameState({ ...gameState, choice, computerChoice });
  }

  function randomChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
    }
  }

  function findWinner() {
    const winningMap = {
      Paper: 'Rock',
      Rock: 'Scissors',
      Scissors: 'Paper',
    };

    if (gameState.choice === gameState.computerChoice) {
      return 'TIE';
    }

    for (const [key, value] of Object.entries(winningMap)) {
      if (key === gameState.choice && value === gameState.computerChoice) {
        return 'YOU WIN';
      } else if (key === gameState.computerChoice && value === gameState.choice) {
        return 'YOU LOOSE';
      }
    }
  }

  function handleRest() {
    setGameState({ ...gameState, choice: null, computerChoice: null, winner: null });
  }

  function handleScore(result: any) {
    switch (result) {
      case 'YOU WIN':
        localStorage.setItem('score', `${gameState.score + 1}`);
        setGameState((prevState) => ({ ...prevState, score: prevState.score + 1 }));
        break;
      case 'YOU LOOSE':
        localStorage.setItem('score', `${gameState.score - 1}`);
        setGameState((prevState) => ({ ...prevState, score: prevState.score - 1 }));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (gameState.choice !== null && gameState.computerChoice !== null) {
      const winner = findWinner();
      setGameState({ ...gameState, winner });
      handleScore(winner);
    }
  }, [gameState.choice]);

  const display = {
    Rock: {
      icon: Rock,
      color: 'hsl(349, 71%, 52%)',
    },
    Paper: {
      icon: Paper,
      color: 'hsl(230, 89%, 62%)',
    },
    Scissors: {
      icon: Scissors,
      color: 'hsl(39, 89%, 49%)',
    },
  };

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '5px',
          padding: '0.75rem 1.5rem',
          textAlign: 'center',
          width: '75px',
          float: 'right',
          marginRight: '8px',
        }}
      >
        <Typography
          variant={'h3'}
          style={{ fontSize: '0.5rem', letterSpacing: '.05rem', color: 'hsl(229, 64%, 46%)' }}
        >
          SCORE
        </Typography>
        <Typography
          variant={'h1'}
          style={{ fontSize: '1.75rem', color: 'hsl(229, 25%, 31%)', fontWeight: 700 }}
        >
          {gameState.score}
        </Typography>
      </div>
      {!gameState.winner &&
        Object.entries(display).map(([key, value]) => {
          return (
            <div key={key} style={{ display: 'inline-block', marginRight: '5%' }}>
              <img
                src={value.icon}
                alt={`Play ${value.icon}`}
                onClick={() => startRound(key)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          );
        })}
      <Grid container alignItems={'center'} direction='row' style={{ marginTop: '5%' }}>
        <Grid item md={6}>
          {gameState.choice && (
            <div>
              <Typography>Your Choice</Typography>
              <Typography style={{ marginTop: '5%' }}>
                <img src={display[gameState.choice]['icon']} alt={`Play ${gameState.choice}`} />
              </Typography>
            </div>
          )}
        </Grid>
        <Grid item md={6}>
          {gameState.computerChoice && (
            <div>
              <Typography>Computer Choice</Typography>
              <Typography style={{ marginTop: '5%' }}>
                <img
                  src={display[gameState.computerChoice]['icon']}
                  alt={`Play ${gameState.computerChoice}`}
                />
              </Typography>
            </div>
          )}
        </Grid>
      </Grid>

      <Typography
        variant={'h1'}
        style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '2.5rem', fontWeight: 700 }}
      >
        {gameState.winner}
      </Typography>
      {gameState.winner && (
        <Button
          variant={'contained'}
          style={{
            padding: '1.25rem 3.5rem',
            backgroundColor: 'white',
            borderRadius: '5px',
            color: 'rgb(20, 21, 57)',
            fontSize: '0.875rem',
            letterSpacing: '0.1rem',
            cursor: 'pointer',
            fontWeight: 700,
          }}
          onClick={handleRest}
        >
          PLAY AGAIN
        </Button>
      )}
    </>
  );
}

export default Game;
