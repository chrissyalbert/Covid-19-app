import React from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";

export default class Dashboard extends React.PureComponent {
    render() {
        const {labels, cases, deaths, state, total } = this.props;
        return (
            <div>
            <header>
                <h1 className={classes.mobile}>Confirmed {state} {total} Covid-19 Cases</h1>
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