import React from 'react';
import Button from 'react-bootstrap/Button';

export const USTotalPerCapita = props => {
  const { handleClick, totalCases, perCapita } = props;
  return (
    (totalCases && perCapita) ? null :
    <Button 
      variant="link"
      onClick={handleClick}
      totalcases={totalCases.toString()}
      percapita={perCapita.toString()}
    >
      Show Cases per 100,000 people
    </Button>
  );
}

export const USNewPerCapita = props => {
  const { handleClick, totalCases, perCapita } = props;
  return (
    (!totalCases && perCapita) ? null :
    <Button 
      variant="link"
      onClick={handleClick}
    >
      Show New Cases per 100,000 people
    </Button>
  );
}

export const StatesTotalPerCapita = props => {
  const { handleClick, totalCases, perCapita } = props;
  return (
    (totalCases && perCapita) ? null :
    <Button 
      variant="link"
      onClick={handleClick}
      totalCases={totalCases.toString()}
      perCapita={perCapita.toString()}
    >
      Show Cases per 100,000 people
    </Button>
  );
}

export const StatesNewPerCapita = props => {
  const { handleClick, totalCases, perCapita } = props;
  return (
    (!totalCases && perCapita) ? null :
    <Button 
      variant="link"
      onClick={handleClick}
    >
      Show New Cases per 100,000 people
    </Button>
  );
}