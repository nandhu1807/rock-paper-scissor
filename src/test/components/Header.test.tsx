import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Header from '../../client/components/Header';

describe('Header Component Tests', () => {
  let container: Element | DocumentFragment | any;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  test('check rendering of Header component', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Header />);
    });
    expect(container.getElementsByClassName('header-body').length).toBe(1);
    expect(container.getElementsByClassName('header-heading').length).toBe(1);
  });

  test('render Header Component and check game title', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Header />);
    });
    const gameTitle = container.getElementsByClassName('header-heading')[0];
    expect(gameTitle.textContent).toBe('ROCK, PAPER, SCISSORS');
  });
});
