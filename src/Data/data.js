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

