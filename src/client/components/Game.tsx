import React, { useEffect, useState } from 'react';
import { Body, ToggleFlex, ToggleRules } from '../styles/Game.Styles';
import Header from './Header';
import ToggleSwitch from './ToggleSwitch';
import UserSelection from './UserSelection';
import Rules from './Rules';
import actionTypes from '../utils/actionTypes';
import { useDispatch } from 'react-redux';

function Game() {
  const [selectedMode, setSelectedMode] = useState<string>('P VS C');
  const [displayRules, setDisplayRules] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let getValue: string | null;
    // eslint-disable-next-line prefer-const
    getValue = localStorage.getItem('selectedMode');
    if (getValue !== null) {
      setSelectedMode(getValue);
    } else {
      setSelectedMode('P VS C');
    }
  }, []);

  function handleChange(toggleValue: string) {
    setSelectedMode(toggleValue);
    localStorage.setItem('selectedMode', toggleValue);
    dispatch({
      type: actionTypes.REMOVE_ALL_VALUES_FROM_STORAGE,
    });
  }

  return (
    <>
      <Body className={'game-body'}>
        <Header />
        {displayRules && <Rules clickHandler={() => setDisplayRules(!displayRules)} />}
        <div className={'game-toggle-switch-div'}>
          <ToggleSwitch selectedValue={selectedMode} handleChange={handleChange} />
        </div>
        <UserSelection selectedMode={selectedMode} />
        <ToggleFlex className={'game-toggle-flex'}>
          <ToggleRules
            className={'game-toggle-rules-button'}
            onClick={() => setDisplayRules(!displayRules)}
          >
            RULES
          </ToggleRules>
        </ToggleFlex>
      </Body>
    </>
  );
}

export default Game;
