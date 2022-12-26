import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../../App';

describe('App Component Tests', () => {
  let container: Element | DocumentFragment | any;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  test('renders App Component', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<App />);
    });
    expect(container.getElementsByClassName('game-body').length).toBe(1);
    expect(container.getElementsByClassName('game-toggle-switch-div').length).toBe(1);
  });
});
