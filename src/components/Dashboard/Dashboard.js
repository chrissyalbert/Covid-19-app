import React from 'react';
//import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";

// add dynamic data


export default class Dashboard extends React.PureComponent {
  //add dynamic data

    render() {
        const {labels, cases, deaths } = this.props;
        
        
        
        return (
            <div>
            <header>
                <h1>Confirmed Covid-19 Cases</h1>
            </header>
                <LineGraph
                    cases={cases}
                    deaths={deaths}
                    labels={labels} />
            </div>
        );
    }
}

/*
<img src={chartIcon} alt="bar chart icon" />
*/