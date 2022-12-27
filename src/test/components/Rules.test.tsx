import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { render, cleanup } from '../utils/test-utils';
import Rules from '../../client/components/Rules';

describe('Game Component Tests', () => {
  const onClick = jest.fn();
  beforeEach(() => {
    render(<Rules clickHandler={onClick} />);
  });

  afterEach(() => {
    cleanup();
  });

  test('check rendering of Rules Component', () => {
    let component: Element | DocumentFragment | any;
    act(() => {
      const div: Element | DocumentFragment | any = document.createElement('div');
      component = render(<Rules clickHandler={onClick} />, div);
    });
    expect(component.container.getElementsByClassName('rules-modal').length).toBe(1);
  });
});
