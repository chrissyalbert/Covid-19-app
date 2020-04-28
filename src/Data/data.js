export const Covid = {
  handleCSVResult(csvString) {
    // Split csv to rows array
    var rows = csvString.split('\n');
    let newRows = rows.map(element => element.split(","));
    let dateArr = newRows.map(element => element[0]);
    dateArr.shift();
    let casesArr = newRows.map(element => element[1]);
    casesArr.shift();
    let deathsArr = newRows.map(element => element[2]);
    deathsArr.shift();
    newRows = [dateArr, casesArr, deathsArr];
    console.log(`US cases: `, newRows);
    return newRows;
  },

  handleUSNewCases(csvString) {
    let results = this.handleCSVResult(csvString);
    let newCases = [];
    for (let i = 1; i < results[1].length; i++) {
      let element;
      element = results[1][i] - results[1][i-1];
      newCases.push(element);
    }
    console.log(`new cases: `, newCases);
    let newDeaths = [];
    for (let i = 1; i < results[2].length; i++) {
      let element;
      element = results[2][i] - results[2][i-1];
      newDeaths.push(element);
    }
    console.log(`new deaths: `, newDeaths);
    let newResults = [results[0], newCases, newDeaths]
    console.log(`newResults: `, newResults);
    return newResults;
  },

  handleStateCSVResult(csvString, fips) {
    // Split csv to rows array
    var rows = csvString.split('\n');
    let newRows = rows.map(element => element.split(","));
    let selectedState = [];
    for (let i = 1; i < newRows.length; i++) {
      // eslint-disable-next-line
      if (newRows[i][2] == fips) {
        selectedState.push(newRows[i]);
      }
    }
    let dateArr = selectedState.map(element => element[0]);
    let casesArr = selectedState.map(element => element[3]);
    let deathsArr = selectedState.map(element => element[4]);
    let stateName = selectedState[1][1];
    selectedState = [dateArr, casesArr, deathsArr, stateName];
    return selectedState;
  },

  handleStatesNewCases(csvString, fips) {
    let selectedState = this.handleStateCSVResult(csvString, fips);
    //create array of new cases found each day
    let newCases = [];
    for (let i = 1; i < selectedState[1].length; i++) {
      let element;
      element = selectedState[1][i] - selectedState[1][i-1];
      newCases.push(element);
    }
    console.log(`new cases: `, newCases);
    let newDeaths = [];
    for (let i = 1; i < selectedState[2].length; i++) {
      let element;
      element = selectedState[2][i] - selectedState[2][i-1];
      newDeaths.push(element);
    }
    console.log(`new deaths: `, newDeaths);
    let newResults = [selectedState[0], newCases, newDeaths, selectedState[3]]
    console.log(`newResults: `, newResults);
    return newResults;
  }
}




/*
let Alabama=[];
let Alaska=[];
let Arizona=[];
let Arkansas=[];
let California=[];
let Colorado=[];
let Connecticut=[];
let Delaware=[];
let DC=[];
let Florida=[];
let Georgia=[];
let Hawaii=[];
let Idaho=[];
let Kansas=[];
let Kentucky=[];
let Louisiana=[];
let Maine=[];
let Maryland=[];
let Massachusetts=[];
let Michigan=[];
let Minnesota=[];
let Mississippi=[];
let Missouri=[];
let Montana=[];
let Nebraska=[];
let Nevada=[];
let NewHampshire=[];
let NewJersey=[];
let NewMexico=[];
let NewYork=[];
let NorthCarolina=[];
let NorthDakota=[];
let Ohio=[];
let Oklahoma=[];
let Oregon=[];
let Pennsylvania=[];
let RhodeIsland=[];
let SouthCarolina=[];
let SouthDakota=[];
let Tennessee=[];
let Texas=[];
let Utah=[];
let Vermont=[];
let Virginia=[];
let Washington=[];
let WestVirginia=[];
let Wisconsin=[];
let Wyoming=[];
let AmericanSamoa=[];
let Micronesia=[];
let Guam=[];
let Mariana=[];
let Palau=[];
let PuertoRico=[];
let VirginIslands=[];
*/
