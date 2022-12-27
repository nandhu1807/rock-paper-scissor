import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../../App';
import { cleanup, render } from '../utils/test-utils';

describe('App Component Tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders App Component', () => {
    let component: Element | DocumentFragment | any;
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<App />, div);
    });
    expect(component.container.getElementsByClassName('game-body').length).toBe(1);
    expect(component.container.getElementsByClassName('game-toggle-switch-div').length).toBe(1);
  });
});
