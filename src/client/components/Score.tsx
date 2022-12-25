import React from 'react';
import PropTypes from 'prop-types';
import { Body, Container, ScoreBorder, ScoreHeader, ScoreValue } from './Score.Styles';

function Score(props: {
  gameState: { player1Name: string; player2Name: string; score1: number; score2: number };
  selectedMode: string;
}) {
  return (
    <>
      <Body className={'score-body'}>
        <Container className={'score-container'}>
          <ScoreBorder className={'score-border-1'}>
            <ScoreHeader className={'score-header-1'}>
              {props.gameState.player1Name} SCORE
            </ScoreHeader>
            <ScoreValue className={'score-value-1'}>{props.gameState.score1}</ScoreValue>
          </ScoreBorder>
          {props.selectedMode !== 'P VS C' && (
            <ScoreBorder className={'score-border-2'}>
              <ScoreHeader className={'score-header-2'}>
                {props.gameState.player2Name} SCORE
              </ScoreHeader>
              <ScoreValue className={'score-value-2'}>{props.gameState.score2}</ScoreValue>
            </ScoreBorder>
          )}
        </Container>
      </Body>
    </>
  );
}

Score.propTypes = {
  gameState: PropTypes.object,
  selectedMode: PropTypes.string,
};

export default Score;
