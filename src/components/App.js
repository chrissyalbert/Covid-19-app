import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetData } from '../Data/GetData';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import SearchByState from './../Data/SearchByState';


class App extends React.Component {
  state = {
    selected: null,
    selectedState: []
  }
  
  handleChange = selectedState => {
    this.setState({ selected: selectedState.value },
      () => console.log(`state.selected: `, this.state.selected));
  }

  
  componentDidMount() {
    GetData.handleRequest().then(response => {
      console.log(response);
      this.setState({selectedState: response}, () => console.log(this.state.selectedState));
      
    });
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
/*
const dates = this.state.selectedState[0];
    const cases = this.state.selectedState[1];
    const deaths = this.state.selectedState[2];

<Dashboard 
                labels={dates}
                cases={cases}
                deaths={deaths}
              />


<input className="form-control form-control-dark w-100" type="text" placeholder="Search by State" aria-label="Search"/>

<!--
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Track Covid-19 Cases in Your State</h1>
         
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
        </div>
      </div>
      -->

*/

/*
  function handleCSVResult(csvString) {
  // Get the div element to append the data to
  var dataArea = document.getElementById('csv-data');
  
  // Split csv to rows array
  var rows = csvString.split('\n');
  //console.log(rows);
  let newRows = rows.map(element => element.split(","));
  console.log(newRows);
  let washington = [];
  for (let i = 1; i < newRows.length; i++) {
    if (newRows[i][1] === "Washington") {
      washington.push(newRows[i]);
    }
    //washington = newRows.filter(element => element[i][1] === "Washington");
  }
  //rows.filter(row => row[1] === "Washington");
  
  console.log(washington);
  var htmlStr = '';
  
  // Iterate over each row
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    
    //console.log(row);
    // split row to cells
    var cells = row.split(',');
    
    // Extract data from cells of current row
    var date = cells[0];
    var state = cells[1];
    // eslint-disable-next-line
    var fips = cells[2];
    var cases = cells[3];
    var deaths = cells[4];
    
    // Add extracted CSV data to string
    htmlStr += `<p>Date: ${date}, state: ${state}, cases: ${cases}, deaths: ${deaths}</p><br>`;
  }
  
  //console.log(htmlStr);
  // Set the string generated from CSV as HTML of the dedicated div
  dataArea.innerHTML = htmlStr;
}
*/