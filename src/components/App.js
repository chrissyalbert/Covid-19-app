import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetData } from '../Data/GetData';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import SearchByState from './../Data/SearchByState';
import { UScases } from './Sidebar/UScases';
import { NewCases, USTotalCases, StateTotalCases } from './Sidebar/NewCases';
import { USTotalPerCapita, USNewPerCapita } from "./Sidebar/PerCapita";

class App extends React.Component {
  state = {
    selected: null,
    selectedState: [],
    totalCases: true,
    perCapita: false
  }
  
  handleChange = async (selected) => {
    await this.setState({ selected: selected.value },
      () => console.log(`state.selected: `, this.state.selected));
    GetData.handleStatesRequest(this.state.selected).then(response => {
        console.log(response);
        this.setState({
          selectedState: response,
          totalCases: true,
          perCapita: false
        }, 
          () => console.log(`this.state: `, this.state));
      });
  }

  async handleUSRequest() {
    await this.setState({selected: null});
    console.log(`this.state: `,this.state);
    await GetData.handleUSRequest().then(response => {
      this.setState({
        selectedState: response,
        totalCases: true,
        perCapita: false
      }, () => console.log(`this.state: `,this.state));
    });
  }

  handleUSTotalPerCapitaCases() {
    GetData.handleUSTotalPerCapita().then(response => {
      console.log(response);
      this.setState({
        selectedState: response,
        totalCases: true,
        perCapita: true
      },
      () => console.log(`this.state: `, this.state));
    });
  }

  handleUSNewPerCapitaCases() {
    GetData.handleUSNewPerCapita().then(response => {
      console.log(response);
      this.setState({
        selectedState: response,
        totalCases: false,
        perCapita: true
      },
      () => console.log(`this.state: `, this.state));
    });
  }
  

  handleNewStatesCases() {
    GetData.handleStatesNewCases(this.state.selected).then(response => {
      console.log(response);
      this.setState({
        selectedState: response,
        totalCases: false,
        perCapita: false
      }, 
        () => console.log(`this.state: `, this.state));
    });
  }

  handleNewUSCases() {
      GetData.handleUSCasesNewCases().then(response => {
        console.log(response);
        this.setState({
          selectedState: response,
          totalCases: false,
          perCapita: false
        }, 
          () => console.log(`this.state: `, this.state));
      })
  }

  handleTotalCases() {
    if (this.state.selected) {
      GetData.handleStatesRequest(this.state.selected).then(response => {
        console.log(response);
        this.setState({
          selectedState: response,
          totalCases: true,
          perCapita: false
        }, 
          () => console.log(`this.state: `, this.state));
      });
    } else {
      this.handleUSRequest();
    }
}

  componentDidMount() {
    this.handleUSRequest();
  }

  render() {
    console.log(`this.state: `, this.state);
    const dates = this.state.selectedState[0];
    const cases = this.state.selectedState[1];
    const deaths = this.state.selectedState[2];
    let states = this.state.selectedState[3] ? this.state.selectedState[3] : "";
    const { totalCases, perCapita } = this.state;
    return (
      <div className="App">
        <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
          <p className="navbar-dark mr-0">Covid-19</p>
          <p className="navbar-dark">
            {states ? states : "United States"}
            &nbsp;
            {totalCases ? "Total Cases" : "New Cases"}
            &nbsp;
            {perCapita ? "per 100,000" : ""}
          </p>
          <SearchByState 
            className="form-control form-control-dark w-100" 
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
                    <USTotalPerCapita 
                      handleClick={() => this.handleUSTotalPerCapitaCases()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    />
                    </li>
                  <li className="nav-item">
                    <USNewPerCapita 
                      handleClick={() => this.handleUSNewPerCapitaCases()}
                      totalCases={totalCases}
                      perCapita={perCapita}
                    />
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" className="col-md-10 ml-sm-auto">
            <Dashboard 
                labels={dates}
                cases={cases}
                deaths={deaths}
                state={states ? states : "United States"}
                total={totalCases ? "Total" : "New"}
                perCapita={perCapita ? "per 100,000 people" : ""}
              />
            </main>
            <div><p>Data is from the <a href="https://github.com/nytimes/covid-19-data" target="_blank" rel="noopener noreferrer">New York Times</a></p>
              <p>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p></div>
          </div>
        </div>
      </div>
    );
  }
  

}
export default App;
