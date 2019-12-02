import React from 'react';

import {
  ErrorWrapper,
  IconWrapper,
} from './styles';

export const ErrorContent = () => (
  <ErrorWrapper>
    <IconWrapper class="icon has-text-danger">
      <i class="fas fa-3x fa-ban"></i>
      some error occurred, while fetching api
    </IconWrapper>
  </ErrorWrapper>  
);
