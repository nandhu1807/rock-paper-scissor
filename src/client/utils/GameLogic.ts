export type Choice = 'Rock' | 'Paper' | 'Scissors';
export type Outcome = 'WIN' | 'LOOSE' | 'TIE' | undefined;

export function randomChoice(): Choice {
  const temp = Math.floor(Math.random() * 3);
  switch (temp) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
    default:
      return 'Rock';
  }
}

export function findWinner(player1Choice: Choice, player2Choice: Choice): Outcome {
  const winningMap = {
    Paper: 'Rock',
    Rock: 'Scissors',
    Scissors: 'Paper',
  };

  if (player1Choice === player2Choice) {
    return 'TIE';
  }

  for (const [key, value] of Object.entries(winningMap)) {
    if (key === player1Choice && value === player2Choice) {
      return 'WIN';
    } else if (key === player2Choice && value === player1Choice) {
      return 'LOOSE';
    }
  }
}
