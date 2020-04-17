import React from 'react';
import Select, { components } from 'react-select';
import { states } from './options';
import './Search.css';

const Placeholder = props => {
  return <components.Placeholder {...props} />;
};

const SearchByState = props => (
  <Select 
    options={states}
    components={{ Placeholder }}
    placeholder={'Search by State'}
    className="basic-single width"
    classNamePrefix="select"  
    onChange={props.onChange}   
    
  />
)

export default SearchByState;

//  value={props.value}