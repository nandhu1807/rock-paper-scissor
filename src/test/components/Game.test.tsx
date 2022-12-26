import React from 'react';
import ReactDOM from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';
import Game from '../../client/components/Game';

describe('Game Component Tests', () => {
  let container: Element | DocumentFragment | any;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  test('check rendering of Game Component', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Game />);
    });
    expect(container.getElementsByClassName('game-body').length).toBe(1);
    expect(container.getElementsByClassName('game-toggle-switch-div').length).toBe(1);
  });

  test('check rendering of Game component and change mode', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Game />);
    });
    expect(container.getElementsByClassName('toggle-switch-label').length).toBe(3);
    const selectModeButton = container.getElementsByClassName('toggle-switch-label')[1];

    act(() => {
      Simulate.click(selectModeButton);
    });
  });
});
