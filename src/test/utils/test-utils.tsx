import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../client/reducers/rootReducer';

// custom render that includes redux provider
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const render = (ui, { initialState, store = createStore(reducer, initialState), ...renderOptions } = {},
) => {
  // eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
