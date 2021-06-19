import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

function UnknownRoute(props) {
  const location = useLocation();
  console.log(location);
  return (
    <Text>
      Sorry, there is no {location.pathname} route! Sign up to be a user{' '}
      <Link style={linkStyle} to='/'>
        here!
      </Link>
    </Text>
  );
}
const Text = styled.div`
  font-size: 16px;
  color: #fff;
`;
const linkStyle = {
  color: '#fff',
};

export default UnknownRoute;
