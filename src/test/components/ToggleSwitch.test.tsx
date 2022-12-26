import React from 'react';
import ReactDOM from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';
import ToggleSwitch from '../../client/components/ToggleSwitch';

describe('Toggle Switch Component Tests', () => {
  const handleChangeMock = jest.fn();
  let selectedValue = '';
  let container: Element | DocumentFragment | any;

  beforeEach(() => {
    selectedValue = 'P VS C';
    container = document.createElement('div');
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  test('check rendering of Toggle Switch component', () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <ToggleSwitch selectedValue={selectedValue} handleChange={handleChangeMock} />,
      );
    });
    expect(container.getElementsByClassName('toggle-switch-body').length).toBe(1);
  });

  test('check rendering of Toggle values', () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <ToggleSwitch selectedValue={selectedValue} handleChange={handleChangeMock} />,
      );
    });
    expect(container.getElementsByClassName('toggle-switch-span').length).toBe(3);
    expect(container.getElementsByClassName('toggle-switch-label').length).toBe(3);
  });

  test('check render Toggle values and click on change function', () => {
    selectedValue = 'P VS P';
    act(() => {
      ReactDOM.createRoot(container).render(
        <ToggleSwitch selectedValue={selectedValue} handleChange={handleChangeMock} />,
      );
    });
    expect(container.getElementsByClassName('toggle-switch-span').length).toBe(3);
    expect(container.getElementsByClassName('toggle-switch-label').length).toBe(3);
    const playerVsComputer = container.getElementsByClassName('toggle-switch-label')[0];

    act(() => {
      Simulate.click(playerVsComputer);
    });
  });
});
