import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetData } from '../Data/GetData';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import SearchByState from './../Data/SearchByState';
import { UScases } from './Sidebar/UScases';
import { NewCases, USTotalCases, StateTotalCases } from './Sidebar/NewCases';
import { USTotalPerCapita, USNewPerCapita, StatesTotalPerCapita, StatesNewPerCapita } from "./Sidebar/PerCapita";

class App extends React.Component {
  state = {
    selected: null,
    selectedState: [],
    totalCases: true,
    perCapita: false
  }
  
  handleChange = async (selected) => {
    let value = selected[0].value;
    await this.setState({ selected: value });
    GetData.handleStatesRequest(this.state.selected).then(response => {
        this.setState({
          selectedState: response,
          totalCases: true,
          perCapita: false
        });
      });
  }

  async handleUSRequest() {
    await this.setState({selected: null});
    await GetData.handleUSRequest().then(response => {
      this.setState({
        selectedState: response,
        totalCases: true,
        perCapita: false
      });
    });
  }

  handleUSTotalPerCapita() {
    GetData.handleUSTotalPerCapita().then(response => {
      this.setState({
        selectedState: response,
        totalCases: true,
        perCapita: true
      });
    });
  }

  handleUSNewPerCapita() {
    GetData.handleUSNewPerCapita().then(response => {
      this.setState({
        selectedState: response,
        totalCases: false,
        perCapita: true
      });
    });
  }
  
  handleStatesTotalPerCapita() {
    GetData.handleStatesTotalPerCapita(this.state.selected).then(response => {
      this.setState({
        selectedState: response,
        totalCases: true,
        perCapita: true
      });
    });
  }

  handleStatesNewPerCapita() {
    GetData.handleStatesNewPerCapita(this.state.selected).then(response => {
      this.setState({
        selectedState: response,
        totalCases: false,
        perCapita: true
      });
    });
  }

  handleNewStatesCases() {
    GetData.handleStatesNewCases(this.state.selected).then(response => {
      this.setState({
        selectedState: response,
        totalCases: false,
        perCapita: false
      });
    });
  }

  handleNewUSCases() {
      GetData.handleUSCasesNewCases().then(response => {
        this.setState({
          selectedState: response,
          totalCases: false,
          perCapita: false
        });
      })
  }

  handleTotalCases() {
    if (this.state.selected) {
      GetData.handleStatesRequest(this.state.selected).then(response => {
        this.setState({
          selectedState: response,
          totalCases: true,
          perCapita: false
        });
      });
    } else {
      this.handleUSRequest();
    }
}

  componentDidMount() {
    this.handleUSRequest();
  }

  render() {
    const dates = this.state.selectedState[0];
    const cases = this.state.selectedState[1];
    const deaths = this.state.selectedState[2];
    let states = this.state.selectedState[3] ? this.state.selectedState[3] : "";
    const { totalCases, perCapita } = this.state;
    return (
      <div className="App">
        <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow titlebar">
          <p className="navbar-dark">Covid-19</p>
          <p className="navbar-dark">
            {states ? states : "United States"}
            &nbsp;
            {totalCases ? "Total Cases" : "New Cases"}
            &nbsp;
            {perCapita ? "per 100,000" : ""}
          </p>
          <SearchByState 
            className="col-md-6" 
            onChange={this.handleChange}
            value={this.state.selectedState}
            />
        </nav>
        <div className="container-fluid databox">
          <div className="row">
            <nav className="col-md-2 d-block sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    {states && 
                    <UScases 
                      handleClick={() => this.handleUSRequest()}
                    />
                    }
                  </li>
                  <li className="nav-item">
                    {states && 
                    <StateTotalCases 
                      handleClick={() => this.handleNewStatesCases()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    /> }
                    {!states &&
                    <USTotalCases
                      handleClick={() => this.handleNewUSCases()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    /> }
                  </li>
                  <li className="nav-item">
                    <NewCases 
                      handleClick={() => this.handleTotalCases()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    />
                  </li>
                  <li className="nav-item">
                    {!states && <USTotalPerCapita 
                      handleClick={() => this.handleUSTotalPerCapita()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    />}
                    {states && <StatesTotalPerCapita 
                      handleClick={() => this.handleStatesTotalPerCapita()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    />}
                    </li>
                  <li className="nav-item">
                    {!states && 
                    <USNewPerCapita 
                      handleClick={() => this.handleUSNewPerCapita()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    />}
                    {states && 
                    <StatesNewPerCapita 
                      handleClick={() => this.handleStatesNewPerCapita()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    />}
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" className="col-md-10 ml-sm-auto">
            <Dashboard 
                labels={dates}
                cases={cases}
                deaths={deaths}
                state={this.state.selectedState[3] ? this.state.selectedState[3] : "United States"}
                total={totalCases ? "Total" : "New"}
                perCapita={perCapita ? "per 100,000 people" : ""}
              />
            </main>
            <div className="w-100"><p>Covid-19 Cases data is from the <a href="https://github.com/nytimes/covid-19-data" target="_blank" rel="noopener noreferrer">New York Times</a></p><p>U.S. and states population estimates are from the <a href="https://www.census.gov/data/tables/time-series/demo/popest/2010s-state-total.html" target="_blank" rel="noopener noreferrer">U.S. Census Bureau</a></p>
              <p>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p></div>
          </div>
        </div>
      </div>
    );
  }
  

}
export default App;
