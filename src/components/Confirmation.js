import React from 'react';
import styled from 'styled-components';

const Confirmation = (props) => {
  const { name } = props.location.state || {};
  if (name) return <ConfirmText>{name}, thank you for signing up!</ConfirmText>;

  return <ConfirmText>Thank you for signing up!</ConfirmText>;
};

const ConfirmText = styled.div`
  font-size: 16px;
  color: #fff;
`;

export default Confirmation;
