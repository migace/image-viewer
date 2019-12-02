import React from 'react';
import Proptypes from 'prop-types';

import {
  Wrapper,
  IconWrapper,
} from './styles';

export const TextInfo = ({ ico, message, color }) => (
  <Wrapper color={color}>
    <IconWrapper class="icon has-text-danger">
      <i class={`fas fa-3x fa-${ico}`}></i>
        {message}
    </IconWrapper>
  </Wrapper>  
);

TextInfo.propTypes = {
  ico: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
};
