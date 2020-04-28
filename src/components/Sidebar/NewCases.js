import React from 'react';
import Button from 'react-bootstrap/Button';

export const NewCases = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show Total Cases
    </Button>
  );
}

export const USTotalCases = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show New Cases
    </Button>
  );
}

export const StateTotalCases = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show New Cases
    </Button>
  );
}