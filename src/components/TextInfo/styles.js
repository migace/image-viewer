import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => props.color || '#f00'};
`;

export const IconWrapper = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    margin-right: 12px;
  }
`;
