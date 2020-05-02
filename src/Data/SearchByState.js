import React from 'react';
import Select from "react-dropdown-select";
import { states } from './options';
import './Search.css';


const SearchByState = props => (
  <Select 
    options={states}
    placeholder={'Search by State'} 
    onChange={(selected) => props.onChange(selected)}   
    className="width"
    classNamePrefix="select"
    dropdownHandle={false}
    value=""
  />
)

export default SearchByState;
