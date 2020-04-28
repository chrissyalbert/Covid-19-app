import React from 'react';
import Button from 'react-bootstrap/Button';

export const USTotalPerCapita = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show Cases per 100,000 people
    </Button>
  );
}

export const USNewPerCapita = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show New Cases per 100,000 people
    </Button>
  );
}