import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetData } from '../Data/GetData';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import SearchByState from './../Data/SearchByState';
import { UScases } from './Sidebar/UScases';
import { NewCases, USTotalCases, StateTotalCases } from './Sidebar/ToggleCases';

class App extends React.Component {
  state = {
    selected: null,
    selectedState: [],
    totalCases: true
  }
  
  handleChange = async (selected) => {
    await this.setState({ selected: selected.value },
      () => console.log(`state.selected: `, this.state.selected));
    GetData.handleStateRequest(this.state.selected).then(response => {
        console.log(response);
        this.setState({
          selectedState: response,
          totalCases: true
        }, 
          () => console.log(`this.state: `, this.state));
      });
  }

  async handleUSRequest() {
    await this.setState({selected: null});
    console.log(`this.state: `,this.state);
    await GetData.handleRequest().then(response => {
      this.setState({
        selectedState: response,
        totalCases: true
      }, () => console.log(`this.state: `,this.state));
    });
  }

  newStateCases() {
    GetData.handleStateCasesToggle(this.state.selected).then(response => {
      console.log(response);
      this.setState({
        selectedState: response,
        totalCases: false
      }, 
        () => console.log(`this.state: `, this.state));
    });
  }

  newUSCases() {
      GetData.handleUSCasesToggle().then(response => {
        console.log(response);
        this.setState({
          selectedState: response,
          totalCases: false
        }, 
          () => console.log(`this.state: `, this.state));
      })
  }

  totalCases() {
    // causes error if you try to get total US cases after looking at state cases
    if (this.state.selected) {
      GetData.handleStateRequest(this.state.selected).then(response => {
        console.log(response);
        this.setState({
          selectedState: response,
          totalCases: true
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
    return (
      <div className="App">
        <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
          <p className="navbar-dark mr-0">Covid-19</p>
          <p className="navbar-dark">
            {this.state.selectedState[3] ? this.state.selectedState[3] : "United States"}
            &nbsp;
            {this.state.totalCases ? "Total Cases/Deaths" : "New Cases/Deaths"}
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
                    {this.state.selectedState[3] && 
                    <UScases 
                      handleClick={() => this.handleUSRequest()}
                    />
                    }
                  </li>
                  <li className="nav-item">
                    {(this.state.totalCases && this.state.selectedState[3]) && 
                    <StateTotalCases 
                      handleClick={() => this.newStateCases()}
                    /> }
                    {(this.state.totalCases && !this.state.selectedState[3]) &&
                    <USTotalCases
                    handleClick={() => this.newUSCases()}
                    /> }
                    {!this.state.totalCases && 
                    <NewCases 
                    handleClick={() => this.totalCases()}
                    />
                    }
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
                total={this.state.totalCases ? "Total" : "New"}
              />
            </main>
          </div>
        </div>
      </div>
    );
  }
  

}
export default App;
