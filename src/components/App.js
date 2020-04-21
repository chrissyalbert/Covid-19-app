import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetData } from '../Data/GetData';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import SearchByState from './../Data/SearchByState';
import { UScases } from './UScases';

class App extends React.Component {
  state = {
    selected: null,
    selectedState: []
  }
  
  handleChange = selectedState => {
    this.setState({ selected: selectedState.value },
      () => console.log(`state.selected: `, this.state.selected));
  }

  handleUSRequest() {
    GetData.handleRequest().then(response => {
      this.setState({selectedState: response}, () => console.log(this.state.selectedState));
    });
  }

  componentDidMount() {
    this.handleUSRequest();
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selected !== prevState.selected) {
      GetData.handleStateRequest(this.state.selected).then(response => {
        console.log(response);
        this.setState({selectedState: response}, 
          () => console.log(this.state.selectedState));
      })
    }
  }
  
  render() {
    console.log(this.state.selectedState);
    const dates = this.state.selectedState[0];
    const cases = this.state.selectedState[1];
    const deaths = this.state.selectedState[2];
    return (
      <div className="App" id="csv-data">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <p className="navbar-brand col-sm-3 col-md-2 mr-0">Covid-19</p>
          <p className="navbar-brand col-sm-3 col-md-2 mr-0">
            {
              this.state.selectedState[3] ? this.state.selectedState[3] : "United States"
            }
            </p>
          <SearchByState 
            className="form-control form-control-dark w-100" 
            onChange={this.handleChange}
            value={this.state.selectedState}
            />
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <UScases 
                      handleClick={() => this.handleUSRequest()}
                    />
                  </li>
                  <li className="nav-item">
              Total Cases
                  </li>
                  <li className="nav-item">
              Total Deaths
                  </li>
                  <li className="nav-item">
              New Cases per Day
                  </li>
                  <li className="nav-item">
              New Deaths per Day
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Dashboard 
                labels={dates}
                cases={cases}
                deaths={deaths}
              />
            </main>
          </div>
        </div>
      </div>
    );
  }
  

}
export default App;
