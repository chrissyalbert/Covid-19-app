import React from 'react';
import Button from 'react-bootstrap/Button';

export const USPerCapitaCases = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show Total Cases per 100,000 people
    </Button>
  );
}