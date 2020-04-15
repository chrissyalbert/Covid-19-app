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

export const Covid = {
  handleCSVResult(csvString) {
    // Get the div element to append the data to
    //var dataArea = document.getElementById('csv-data');
    
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
      
    }
    
    console.log(washington);
    let dateArr = washington.map(element => element[0]);
    //console.log(dateArr);
    let casesArr = washington.map(element => element[3]);
    
    //create array of new cases found each day
    let newCases = [];
    for (let i = 1; i< casesArr.length; i++) {
      let element;
      element = casesArr[i] - casesArr[i-1];
      newCases.push(element);
    }
    let deathsArr = washington.map(element => element[4]);
    washington = [dateArr, casesArr, deathsArr];
    //console.log(washTotal);
    return washington;
    /*
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
      //htmlStr += `<p>Date: ${date}, state: ${state}, cases: ${cases}, deaths: ${deaths}</p><br>`;
    }
    //console.log(htmlStr);
    // Set the string generated from CSV as HTML of the dedicated div
    //dataArea.innerHTML = htmlStr;
    */
  }
}





const states =  [
  {name: "Alabama", value: 1},
  {name: "Alaska", value: 2},
  {name: "Arizona", value: 4},
  {name: "Arkansas", value: 5},
  {name: "California", value: 6},
  {name: "Colorado", value: 8},
  {name: "Connecticut", value: 9},
  {name: "Delaware", value: 10},
  {name: "District of Columbia", value: 11},
  {name: "Florida", value: 12},
  {name: "Georgia", value: 13},
  {name: "Hawaii", value: 15},
  {name: "Idaho", value: 16},
  {name: "Illinois", value: 17},
  {name: "Indiana", value: 18},
  {name: "Iowa", value: 19},
  {name: "Kansas", value: 20},
  {name: "Kentucky", value: 21},
  {name: "Louisiana", value: 22},
  {name: "Maine", value: 23},
  {name: "Maryland", value: 24},
  {name: "Massachusetts", value: 25},
  {name: "Michigan", value: 26},
  {name: "Minnesota", value: 27},
  {name: "Mississippi", value: 28},
  {name: "Missouri", value: 29},
  {name: "Montana", value: 30},
  {name: "Nebraska", value: 31},
  {name: "Nevada", value: 32},
  {name: "New Hampshire", value: 33},
  {name: "New Jersey", value: 34},
  {name: "New Mexico", value: 35},
  {name: "New York", value: 36},
  {name: "North Carolina", value: 37},
  {name: "North Dakota", value: 38},
  {name: "Ohio", value: 39},
  {name: "Oklahoma", value: 40},
  {name: "Oregon", value: 41},
  {name: "Pennsylvania", value: 42},
  {name: "Rhode Island", value: 44},
  {name: "South Carolina", value: 45},
  {name: "South Dakota", value: 46},
  {name: "Tennessee", value: 47},
  {name: "Texas", value: 48},
  {name: "Utah", value: 49},
  {name: "Vermont", value: 50},
  {name: "Virginia", value: 51},
  {name: "Washington", value: 53},
  {name: "West Virginia", value: 54},
  {name: "Wisconsin", value: 55},
  {name: "Wyoming", value: 56},
  {name: "American Samoa", value: 60},
  {name: "Federated States of Micronesia", value: 64},
  {name: "Guam", value: 66},
  {name: "Northern Mariana Islands", value: 69},
  {name: "Palau", value: 70},
  {name: "Puerto Rico", value: 72},
  {name: "Virgin Islands", value: 78}
  ];
