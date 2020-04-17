export const Covid = {
  handleCSVResult(csvString) {
    // Split csv to rows array
    var rows = csvString.split('\n');
    //console.log(rows);
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

  handleStateCSVResult(csvString, fips) {
    // Split csv to rows array
    var rows = csvString.split('\n');
    //console.log(rows);
    let newRows = rows.map(element => element.split(","));
    console.log(newRows);
    console.log(fips);
    let selectedState = [];
    for (let i = 1; i < newRows.length; i++) {
      //console.log(newRows[i][2])
      if (newRows[i][2] == fips) {
        selectedState.push(newRows[i]);
      }
    }
    console.log(selectedState);
    let dateArr = selectedState.map(element => element[0]);
    //console.log(dateArr);
    let casesArr = selectedState.map(element => element[3]);
    
    //create array of new cases found each day
    let newCases = [];
    for (let i = 1; i< casesArr.length; i++) {
      let element;
      element = casesArr[i] - casesArr[i-1];
      newCases.push(element);
    }
    let deathsArr = selectedState.map(element => element[4]);
    let stateName = selectedState[1][1];
    console.log(stateName);
    selectedState = [dateArr, casesArr, deathsArr, stateName];
    return selectedState;
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
