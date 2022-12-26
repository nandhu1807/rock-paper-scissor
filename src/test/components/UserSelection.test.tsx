import React from 'react';
import ReactDOM from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';
import UserSelection from '../../client/components/UserSelection';

describe('User Selection Component Tests', () => {
  let selectedMode = '';
  let container: Element | DocumentFragment | any;

  beforeEach(() => {
    container = document.createElement('div');
    selectedMode = 'P VS C';
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  test('check rendering of User Selection Component', () => {
    selectedMode = 'P VS C';
    act(() => {
      ReactDOM.createRoot(container).render(<UserSelection selectedMode={selectedMode} />);
    });
    expect(container.getElementsByClassName('score-body').length).toBe(1);
    expect(container.getElementsByClassName('user-selection-body').length).toBe(1);
  });

  test('render User Selection component and play for player vs computer', () => {
    selectedMode = 'P VS C';
    act(() => {
      ReactDOM.createRoot(container).render(<UserSelection selectedMode={selectedMode} />);
    });
    expect(container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(container.getElementsByClassName('user-selection-play-computer-button').length).toBe(0);
    const playerChoice = container.getElementsByClassName('user-selection-icon-image-0')[0];

    act(() => {
      Simulate.click(playerChoice);
    });
    expect(container.getElementsByClassName('user-selection-player1-heading').length).toBe(1);
    const player1Name = container.getElementsByClassName('user-selection-player1-heading')[0];
    expect(player1Name.textContent).toBe("YOU's CHOICE");
    const player2Name = container.getElementsByClassName('user-selection-player2-heading')[0];
    expect(player2Name.textContent).toBe("COMPUTER's CHOICE");
    const winnerName = container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    const resetButton = container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for computer', () => {
    selectedMode = 'C VS C';
    act(() => {
      ReactDOM.createRoot(container).render(<UserSelection selectedMode={selectedMode} />);
    });
    expect(container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(container.getElementsByClassName('user-selection-icon-div').length).toBe(0);
    expect(container.getElementsByClassName('user-selection-play-computer-button').length).toBe(1);
    const playForComputerButton = container.getElementsByClassName(
      'user-selection-play-computer-button',
    )[0];

    act(() => {
      Simulate.click(playForComputerButton);
    });
    expect(container.getElementsByClassName('user-selection-player1-heading').length).toBe(1);
    const player1Name = container.getElementsByClassName('user-selection-player1-heading')[0];
    expect(player1Name.textContent).toBe("COMPUTER 1's CHOICE");
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(1);
    const player2Name = container.getElementsByClassName('user-selection-player2-heading')[0];
    expect(player2Name.textContent).toBe("COMPUTER 2's CHOICE");
    const winnerName = container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    const resetButton = container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for player vs player and expect player 1 win', () => {
    selectedMode = 'P VS P';
    act(() => {
      ReactDOM.createRoot(container).render(<UserSelection selectedMode={selectedMode} />);
    });
    expect(container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(container.getElementsByClassName('user-selection-play-computer-button').length).toBe(0);
    const player1Choice = container.getElementsByClassName('user-selection-icon-image-1')[0];
    const player2Choice = container.getElementsByClassName('user-selection-icon-image-0')[0];

    act(() => {
      Simulate.click(player1Choice);
    });
    expect(container.getElementsByClassName('user-selection-player1-heading').length).toBe(1);
    const player1Name = container.getElementsByClassName('user-selection-player1-heading')[0];
    expect(player1Name.textContent).toBe("PLAYER 1's CHOICE");
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(0);

    act(() => {
      Simulate.click(player2Choice);
    });
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(1);
    const player2Name = container.getElementsByClassName('user-selection-player2-heading')[0];
    expect(player2Name.textContent).toBe("PLAYER 2's CHOICE");
    const winnerName = container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    expect(winnerName[0].textContent).toBe('PLAYER 1 WIN');
    const resetButton = container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for player vs player and expect player 2 win', () => {
    selectedMode = 'P VS P';
    act(() => {
      ReactDOM.createRoot(container).render(<UserSelection selectedMode={selectedMode} />);
    });
    expect(container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(container.getElementsByClassName('user-selection-play-computer-button').length).toBe(0);
    const player1Choice = container.getElementsByClassName('user-selection-icon-image-0')[0];
    const player2Choice = container.getElementsByClassName('user-selection-icon-image-1')[0];

    act(() => {
      Simulate.click(player1Choice);
    });
    expect(container.getElementsByClassName('user-selection-player1-heading').length).toBe(1);
    const player1Name = container.getElementsByClassName('user-selection-player1-heading')[0];
    expect(player1Name.textContent).toBe("PLAYER 1's CHOICE");
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(0);

    act(() => {
      Simulate.click(player2Choice);
    });
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(1);
    const player2Name = container.getElementsByClassName('user-selection-player2-heading')[0];
    expect(player2Name.textContent).toBe("PLAYER 2's CHOICE");
    const winnerName = container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    expect(winnerName[0].textContent).toBe('PLAYER 2 WIN');
    const resetButton = container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for player vs player and expect tie', () => {
    selectedMode = 'P VS P';
    act(() => {
      ReactDOM.createRoot(container).render(<UserSelection selectedMode={selectedMode} />);
    });
    expect(container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(container.getElementsByClassName('user-selection-play-computer-button').length).toBe(0);
    const player1Choice = container.getElementsByClassName('user-selection-icon-image-0')[0];
    const player2Choice = container.getElementsByClassName('user-selection-icon-image-0')[0];

    act(() => {
      Simulate.click(player1Choice);
    });
    expect(container.getElementsByClassName('user-selection-player1-heading').length).toBe(1);
    const player1Name = container.getElementsByClassName('user-selection-player1-heading')[0];
    expect(player1Name.textContent).toBe("PLAYER 1's CHOICE");
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(0);

    act(() => {
      Simulate.click(player2Choice);
    });
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(1);
    const player2Name = container.getElementsByClassName('user-selection-player2-heading')[0];
    expect(player2Name.textContent).toBe("PLAYER 2's CHOICE");
    const winnerName = container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    expect(winnerName[0].textContent).toBe('TIE');
    const resetButton = container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for player vs player and click play again', () => {
    selectedMode = 'P VS P';
    act(() => {
      ReactDOM.createRoot(container).render(<UserSelection selectedMode={selectedMode} />);
    });
    expect(container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(container.getElementsByClassName('user-selection-play-computer-button').length).toBe(0);
    const player1Choice = container.getElementsByClassName('user-selection-icon-image-0')[0];
    const player2Choice = container.getElementsByClassName('user-selection-icon-image-0')[0];

    act(() => {
      Simulate.click(player1Choice);
    });
    expect(container.getElementsByClassName('user-selection-player1-heading').length).toBe(1);
    const player1Name = container.getElementsByClassName('user-selection-player1-heading')[0];
    expect(player1Name.textContent).toBe("PLAYER 1's CHOICE");
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(0);

    act(() => {
      Simulate.click(player2Choice);
    });
    expect(container.getElementsByClassName('user-selection-player2-heading').length).toBe(1);
    const player2Name = container.getElementsByClassName('user-selection-player2-heading')[0];
    expect(player2Name.textContent).toBe("PLAYER 2's CHOICE");
    const resetButton = container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
    const playAgainButton = container.getElementsByClassName('user-selection-reset-button')[0];

    act(() => {
      Simulate.click(playAgainButton);
    });
    expect(container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
  });
});
