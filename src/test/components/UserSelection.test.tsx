import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import UserSelection from '../../client/components/UserSelection';
import { cleanup, render } from '../utils/test-utils';

describe('User Selection Component Tests', () => {
  let selectedMode = '';

  const mockStore = {
    score1: 0,
    score2: 0,
  };
  beforeEach(() => {
    selectedMode = 'P VS C';
    render(<UserSelection selectedMode={selectedMode} />);
  });

  afterEach(() => {
    cleanup();
  });

  const createMockStore = () => {
    const initialState = { getFromStorageReducer: { mapFromStorage: { score1: 0, score2: 0 } } };
    const options = { initialState };
    selectedMode = 'P VS P';
    return render(<UserSelection selectedMode={selectedMode} />, options);
  };

  test('check rendering of User Selection Component', () => {
    let component: Element | DocumentFragment | any;
    selectedMode = 'P VS C';
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<UserSelection selectedMode={selectedMode} />, div);
    });
    expect(component.container.getElementsByClassName('score-body').length).toBe(1);
    expect(component.container.getElementsByClassName('user-selection-body').length).toBe(1);
  });

  test('render User Selection component and play for player vs computer', () => {
    let component: Element | DocumentFragment | any;
    selectedMode = 'P VS C';
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<UserSelection selectedMode={selectedMode} />, div);
    });
    expect(component.container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(component.container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(
      component.container.getElementsByClassName('user-selection-play-computer-button').length,
    ).toBe(0);
    const playerChoice = component.container.getElementsByClassName(
      'user-selection-icon-image-0',
    )[0];

    act(() => {
      Simulate.click(playerChoice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player1-heading').length,
    ).toBe(1);
    const player1Name = component.container.getElementsByClassName(
      'user-selection-player1-heading',
    )[0];
    expect(player1Name.textContent).toBe('YOU PICKED');
    const player2Name = component.container.getElementsByClassName(
      'user-selection-player2-heading',
    )[0];
    expect(player2Name.textContent).toBe('COMPUTER PICKED');
    const winnerName = component.container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    const resetButton = component.container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for computer', () => {
    let component: Element | DocumentFragment | any;
    selectedMode = 'C VS C';
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<UserSelection selectedMode={selectedMode} />, div);
    });
    expect(component.container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(component.container.getElementsByClassName('user-selection-icon-div').length).toBe(0);
    expect(
      component.container.getElementsByClassName('user-selection-play-computer-button').length,
    ).toBe(1);
    const playForComputerButton = component.container.getElementsByClassName(
      'user-selection-play-computer-button',
    )[0];

    act(() => {
      Simulate.click(playForComputerButton);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player1-heading').length,
    ).toBe(1);
    const player1Name = component.container.getElementsByClassName(
      'user-selection-player1-heading',
    )[0];
    expect(player1Name.textContent).toBe('COMPUTER 1 PICKED');
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(1);
    const player2Name = component.container.getElementsByClassName(
      'user-selection-player2-heading',
    )[0];
    expect(player2Name.textContent).toBe('COMPUTER 2 PICKED');
    const winnerName = component.container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    const resetButton = component.container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for player vs player and expect player 1 win', () => {
    let component: Element | DocumentFragment | any;
    selectedMode = 'P VS P';
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<UserSelection selectedMode={selectedMode} />, div);
    });
    expect(component.container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(component.container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(
      component.container.getElementsByClassName('user-selection-play-computer-button').length,
    ).toBe(0);
    const player1Choice = component.container.getElementsByClassName(
      'user-selection-icon-image-1',
    )[0];
    const player2Choice = component.container.getElementsByClassName(
      'user-selection-icon-image-0',
    )[0];

    act(() => {
      Simulate.click(player1Choice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player1-heading').length,
    ).toBe(1);
    const player1Name = component.container.getElementsByClassName(
      'user-selection-player1-heading',
    )[0];
    expect(player1Name.textContent).toBe('PLAYER 1 PICKED');
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(0);

    act(() => {
      Simulate.click(player2Choice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(1);
    const player2Name = component.container.getElementsByClassName(
      'user-selection-player2-heading',
    )[0];
    expect(player2Name.textContent).toBe('PLAYER 2 PICKED');
    const winnerName = component.container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    expect(winnerName[0].textContent).toBe('PLAYER 1 WIN');
    const resetButton = component.container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for player vs player and expect player 2 win', () => {
    let component: Element | DocumentFragment | any;
    selectedMode = 'P VS P';
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<UserSelection selectedMode={selectedMode} />, div);
    });
    expect(component.container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(component.container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(
      component.container.getElementsByClassName('user-selection-play-computer-button').length,
    ).toBe(0);
    const player1Choice = component.container.getElementsByClassName(
      'user-selection-icon-image-0',
    )[0];
    const player2Choice = component.container.getElementsByClassName(
      'user-selection-icon-image-1',
    )[0];

    act(() => {
      Simulate.click(player1Choice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player1-heading').length,
    ).toBe(1);
    const player1Name = component.container.getElementsByClassName(
      'user-selection-player1-heading',
    )[0];
    expect(player1Name.textContent).toBe('PLAYER 1 PICKED');
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(0);

    act(() => {
      Simulate.click(player2Choice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(1);
    const player2Name = component.container.getElementsByClassName(
      'user-selection-player2-heading',
    )[0];
    expect(player2Name.textContent).toBe('PLAYER 2 PICKED');
    const winnerName = component.container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    expect(winnerName[0].textContent).toBe('PLAYER 2 WIN');
    const resetButton = component.container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for player vs player and expect tie', () => {
    let component: Element | DocumentFragment | any;
    selectedMode = 'P VS P';
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<UserSelection selectedMode={selectedMode} />, div);
    });
    expect(component.container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(component.container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(
      component.container.getElementsByClassName('user-selection-play-computer-button').length,
    ).toBe(0);
    const player1Choice = component.container.getElementsByClassName(
      'user-selection-icon-image-0',
    )[0];
    const player2Choice = component.container.getElementsByClassName(
      'user-selection-icon-image-0',
    )[0];

    act(() => {
      Simulate.click(player1Choice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player1-heading').length,
    ).toBe(1);
    const player1Name = component.container.getElementsByClassName(
      'user-selection-player1-heading',
    )[0];
    expect(player1Name.textContent).toBe('PLAYER 1 PICKED');
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(0);

    act(() => {
      Simulate.click(player2Choice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(1);
    const player2Name = component.container.getElementsByClassName(
      'user-selection-player2-heading',
    )[0];
    expect(player2Name.textContent).toBe('PLAYER 2 PICKED');
    const winnerName = component.container.getElementsByClassName('user-selection-winner-name');
    expect(winnerName).toHaveLength(1);
    expect(winnerName[0].textContent).toBe('TIE');
    const resetButton = component.container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
  });

  test('render User Selection component and play for player vs player and click play again', () => {
    let component: Element | DocumentFragment | any;
    selectedMode = 'P VS P';
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<UserSelection selectedMode={selectedMode} />, div);
    });
    expect(component.container.getElementsByClassName('user-selection-body').length).toBe(1);
    expect(component.container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
    expect(
      component.container.getElementsByClassName('user-selection-play-computer-button').length,
    ).toBe(0);
    const player1Choice = component.container.getElementsByClassName(
      'user-selection-icon-image-0',
    )[0];
    const player2Choice = component.container.getElementsByClassName(
      'user-selection-icon-image-0',
    )[0];

    act(() => {
      Simulate.click(player1Choice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player1-heading').length,
    ).toBe(1);
    const player1Name = component.container.getElementsByClassName(
      'user-selection-player1-heading',
    )[0];
    expect(player1Name.textContent).toBe('PLAYER 1 PICKED');
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(0);

    act(() => {
      Simulate.click(player2Choice);
    });
    expect(
      component.container.getElementsByClassName('user-selection-player2-heading').length,
    ).toBe(1);
    const player2Name = component.container.getElementsByClassName(
      'user-selection-player2-heading',
    )[0];
    expect(player2Name.textContent).toBe('PLAYER 2 PICKED');
    const resetButton = component.container.getElementsByClassName('user-selection-reset-button');
    expect(resetButton.length).toBe(1);
    const playAgainButton = component.container.getElementsByClassName(
      'user-selection-reset-button',
    )[0];

    act(() => {
      Simulate.click(playAgainButton);
    });
    expect(component.container.getElementsByClassName('user-selection-icon-div').length).toBe(3);
  });

  test('check state and render data from store', () => {
    const component: Element | DocumentFragment | any = createMockStore();
    expect(component.container.getElementsByClassName('score-body').length).toBe(1);
    expect(component.container.getElementsByClassName('score-border-1').length).toBe(1);
    expect(component.container.getElementsByClassName('score-border-2').length).toBe(1);
    const player1Title = component.container.getElementsByClassName('score-header-1')[0];
    const player1Score = component.container.getElementsByClassName('score-value-1')[0];
    expect(player1Title.textContent).toBe('PLAYER 1 SCORE');
    expect(player1Score.textContent).toBe('0');
    const player2Title = component.container.getElementsByClassName('score-header-2')[0];
    const player2Score = component.container.getElementsByClassName('score-value-2')[0];
    expect(player2Title.textContent).toBe('PLAYER 2 SCORE');
    expect(player2Score.textContent).toBe('0');
  });
});
