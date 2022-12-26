import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Score from '../../client/components/Score';

describe('Score Component Tests', () => {
  let selectedMode = '';
  const gameState = {
    player1Name: 'PLAYER 1',
    player2Name: 'PLAYER 2',
    score1: 0,
    score2: 0,
  };
  let container: Element | DocumentFragment | any;

  beforeEach(() => {
    container = document.createElement('div');
    selectedMode = 'P VS C';
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  test('check rendering of Score component', () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <Score selectedMode={selectedMode} gameState={gameState} />,
      );
    });
    expect(container.getElementsByClassName('score-body').length).toBe(1);
    expect(container.getElementsByClassName('score-container').length).toBe(1);
  });

  test('render Score component and check for Player VS Computer', () => {
    selectedMode = 'P VS C';
    act(() => {
      ReactDOM.createRoot(container).render(
        <Score selectedMode={selectedMode} gameState={gameState} />,
      );
    });
    expect(container.getElementsByClassName('score-border-1').length).toBe(1);
    expect(container.getElementsByClassName('score-border-2').length).toBe(0);
  });

  test('render Score component and check for Computer VS Computer', () => {
    selectedMode = 'C VS C';
    act(() => {
      ReactDOM.createRoot(container).render(
        <Score selectedMode={selectedMode} gameState={gameState} />,
      );
    });
    expect(container.getElementsByClassName('score-border-1').length).toBe(1);
    expect(container.getElementsByClassName('score-border-2').length).toBe(1);
  });

  test('render Score component and check for Player VS Player', () => {
    selectedMode = 'P VS P';
    act(() => {
      ReactDOM.createRoot(container).render(
        <Score selectedMode={selectedMode} gameState={gameState} />,
      );
    });
    expect(container.getElementsByClassName('score-border-1').length).toBe(1);
    expect(container.getElementsByClassName('score-border-2').length).toBe(1);
    const player1Title = container.getElementsByClassName('score-header-1')[0];
    expect(player1Title.textContent).toBe('PLAYER 1 SCORE');
    const player2Title = container.getElementsByClassName('score-header-2')[0];
    expect(player2Title.textContent).toBe('PLAYER 2 SCORE');
  });
});
