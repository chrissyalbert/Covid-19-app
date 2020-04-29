import React from 'react';
import Button from 'react-bootstrap/Button';

export const NewCases = props => {
  const { handleClick, totalCases, perCapita } = props;
  
  return (

    <Button 
      variant="link"
      onClick={handleClick}
    >
      Show Total Cases
    </Button>
  );
}

export const USTotalCases = props => {
  const { handleClick, totalCases, perCapita } = props;
  return (
 
    <Button 
      variant="link"
      onClick={handleClick}
    >
      Show New Cases
    </Button>
  );
}

export const StateTotalCases = props => {
  const { handleClick, totalCases, perCapita } = props;
  return (
    <Button 
      variant="link"
      onClick={handleClick}

    >
      Show New Cases
    </Button>
  );
}