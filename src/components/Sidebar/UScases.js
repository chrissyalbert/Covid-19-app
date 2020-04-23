import React from 'react';
import Button from 'react-bootstrap/Button';


export const UScases = props => {
  return (
    <Button 
      variant="link"
      onClick={props.handleClick}
    >
      Show U.S. Cases
    </Button>
  );
}