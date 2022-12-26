import React, { useState } from 'react';
import { Body } from '../styles/Game.Styles';
import Header from './Header';
import ToggleSwitch from './ToggleSwitch';
import UserSelection from './UserSelection';

function Game() {
  const [selectedMode, setSelectedMode] = useState<string>('P VS C');

  function handleChange(toggleValue: string) {
    setSelectedMode(toggleValue);
  }

  return (
    <>
      <Body className={'game-body'}>
        <Header />
        <div className={'game-toggle-switch-div'}>
          <ToggleSwitch selectedValue={selectedMode} handleChange={handleChange} />
        </div>
        <UserSelection selectedMode={selectedMode} />
      </Body>
    </>
  );
}

export default Game;
