import React from 'react';
import Button from 'react-bootstrap/Button';

export const USTotalPerCapita = props => {
  const { handleClick, totalCases, perCapita } = props;
  return (
    (totalCases || (!totalCases && !perCapita)) ? null :
    <Button 
      variant="link"
      onClick={handleClick}
    >
      Show Cases per 100,000 people
    </Button>
  );
}

export const USNewPerCapita = props => {
  const { handleClick, totalCases, perCapita } = props;
  return (
    <Button 
      variant="link"
      onClick={handleClick}
    >
      Show New Cases per 100,000 people
    </Button>
  );
}