import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import Game from '../../client/components/Game';
import { render, cleanup } from '../utils/test-utils';

describe('Game Component Tests', () => {
  beforeEach(() => {
    render(<Game />);
  });

  afterEach(() => {
    cleanup();
  });

  test('check rendering of Game Component', () => {
    let component: Element | DocumentFragment | any;
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<Game />, div);
    });
    expect(component.container.getElementsByClassName('game-body').length).toBe(1);
    expect(component.container.getElementsByClassName('game-toggle-switch-div').length).toBe(1);
  });

  test('check rendering of Game component and change mode', () => {
    let component: Element | DocumentFragment | any;
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<Game />, div);
    });
    expect(component.container.getElementsByClassName('toggle-switch-label').length).toBe(3);
    const selectModeButton = component.container.getElementsByClassName('toggle-switch-label')[1];

    act(() => {
      Simulate.click(selectModeButton);
    });
  });

  test('check rendering of Game component and check Rules component', () => {
    let component: Element | DocumentFragment | any;
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<Game />, div);
    });
    expect(component.container.getElementsByClassName('game-toggle-rules-button').length).toBe(1);
    expect(component.container.getElementsByClassName('rules-modal').length).toBe(0);
    const rulesButton = component.container.getElementsByClassName('game-toggle-rules-button')[0];

    act(() => {
      Simulate.click(rulesButton);
    });
    expect(component.container.getElementsByClassName('rules-modal').length).toBe(1);
  });
});
