import React from 'react';
import { Body, Heading } from '../styles/Header.Styles';

function Header() {
  return (
    <Body className={'header-body'}>
      <Heading className={'header-heading'}>ROCK, PAPER, SCISSORS</Heading>
    </Body>
  );
}

export default Header;
