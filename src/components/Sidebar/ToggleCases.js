import React from 'react';
import Button from 'react-bootstrap/Button';

export const NewCases = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show Total Cases/Deaths
    </Button>
  );
}

export const TotalCases = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show New Cases/Deaths
    </Button>
  );
}