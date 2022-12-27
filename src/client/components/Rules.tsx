import React from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  CrossDesktop,
  CrossMobile,
  Heading,
  HeadingContainer,
  Modal,
} from '../styles/Rules.Styles';

interface Props {
  clickHandler: () => void;
}

function Rules({ clickHandler }: Props) {
  return (
    <>
      <Modal className={'rules-modal'}>
        <Body className={'rules-body'}>
          <HeadingContainer className={'rules-container'}>
            <Heading className={'rules-heading'}>RULES</Heading>
            <CrossDesktop className={'rules-desktop'} onClick={clickHandler} />
          </HeadingContainer>
          <div style={{ marginLeft: '8px', marginRight: '8px' }}>
            <li>Paper beats rock</li>
            <li>Rock beats scissors</li>
            <li>Scissors beats paper</li>
            <li>If the two choices are the same, then its a tie</li>
          </div>
          <CrossMobile className={'rules-mobile'} onClick={clickHandler} />
        </Body>
      </Modal>
    </>
  );
}

Rules.propTypes = {
  clickHandler: PropTypes.func,
};
export default Rules;
