const moment = require('moment');

export const Covid = {
  handleUSCSVResult(csvString) {
    // Split csv to rows array
    var rows = csvString.split('\n');
    let newRows = rows.map(element => element.split(","));
    let dateArr = newRows.map(element => element[0]);
    dateArr.shift();
    dateArr = dateArr.map(element => moment(element).format("MMM D, YYYY"));
    let casesArr = newRows.map(element => element[1]);
    casesArr.shift();
    let deathsArr = newRows.map(element => element[2]);
    deathsArr.shift();
    newRows = [dateArr, casesArr, deathsArr];
    console.log(`US cases: `, newRows);
    return newRows;
  },

  handleUSTotalPerCapita(csvString) {
    let results = this.handleUSCSVResult(csvString);
    let cases = [];
    for (let i = 1; i < results[1].length; i++) {
      let element;
      element = Math.ceil((100000 * results[1][i])/328239523);
      cases.push(element);
    }
    console.log(`cases per 100,000 people: `, cases);
    let deaths = [];
    for (let i = 1; i < results[2].length; i++) {
      let element;
      element = Math.ceil((1000 * results[1][i])/328239523);
      deaths.push(element);
    }
    console.log(`deaths per 100,000 people: `, deaths);
    let perCapitaResults = [results[0], cases, deaths];
    console.log(`perCapitaResults: `, perCapitaResults);
    return perCapitaResults;
  },

  handleUSNewPerCapita(csvString) {
    let results = this.handleUSTotalPerCapita(csvString);
    let newCases = [];
    for (let i = 1; i < results[1].length; i++) {
      let element;
      element = results[1][i] - results[1][i-1];
      newCases.push(element);
    }
    console.log(`new cases per capita: `, newCases);
    let newDeaths = [];
    for (let i = 1; i < results[2].length; i++) {
      let element;
      element = results[2][i] - results[2][i-1];
      newDeaths.push(element);
    }
    console.log(`new deaths per capita: `, newDeaths);
    let newResults = [results[0], newCases, newDeaths]
    console.log(`newResults per capita: `, newResults);
    return newResults;
  },

  handleUSNewCases(csvString) {
    let results = this.handleUSCSVResult(csvString);
    console.log(`results[0]: `, results[0]);
    let newCases = [];
    let dateArr = results[0];
    dateArr.shift();
    console.log(`dateArr: `, dateArr);
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
    let newResults = [dateArr, newCases, newDeaths]
    console.log(`newResults: `, newResults);
    return newResults;
  },

  handleStatesCSVResult(csvString, fips) {
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
    dateArr = dateArr.map(element => moment(element).format("MMM D, YYYY"));
    let casesArr = selectedState.map(element => element[3]);
    let deathsArr = selectedState.map(element => element[4]);
    let stateName = selectedState[1][1];
    selectedState = [dateArr, casesArr, deathsArr, stateName];
    return selectedState;
  },

  handleStatesNewCases(csvString, fips) {
    let selectedState = this.handleStatesCSVResult(csvString, fips);
    let dateArr = selectedState[0];
    dateArr.shift();
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
    let newResults = [dateArr, newCases, newDeaths, selectedState[3]]
    console.log(`newResults: `, newResults);
    return newResults;
  },

  handleStatesTotalPerCapita(csvString, fips) {
    let results = this.handleStatesCSVResult(csvString, fips);
    let population;
    let cases = [];
    // eslint-disable-next-line
    switch(fips) {
      case 1:
        population = 4903185;
        break;
      case 2:
        population = 731545;
        break;
      case 4:
        population = 7278717;
        break;
      case 5:
        population = 3017804;
        break;
      case 6:
        population = 39512223;
        break;
      case 8:
        population = 5758736;
        break;
      case 9:
        population = 3565287;
        break;
      case 10:
        population = 973764;
        break;
      case 11:
        population = 705749;
        break;
      case 12:
        population = 21477737;
        break;
      case 13:
        population = 10617423;
        break;
      case 15:
        population = 1415872;
        break;
      case 16:
        population = 1787065;
        break;
      case 17:
        population = 12671821;
        break;
      case 18:
        population = 6732219;
        break;
      case 19:
        population = 3155070;
        break;
      case 20:
        population = 2913314;
        break;
      case 21:
        population = 4467673;
        break;
      case 22:
        population = 4648794;
        break;
      case 23:
        population = 1344212;
        break;
      case 24:
        population = 6045680;
        break;
      case 25:
        population = 6892503;
        break;
      case 26:
        population = 9986857;
        break;
      case 27:
        population = 5639632;
        break;
      case 28:
        population = 2976149;
        break;
      case 29:
        population = 6137428;
        break;
      case 30:
        population = 1068778;
        break;
      case 31:
        population = 1934408;
        break;
      case 32:
        population = 3080156;
        break;
      case 33:
        population = 1359711;
        break;
      case 34:
        population = 8882190;
        break;
      case 35:
        population = 2096829;
        break;
      case 36:
        population = 19453561;
        break;
      case 37:
        population = 10488084;
        break;
      case 38:
        population = 762062;
        break;
      case 39:
        population = 11689100;
        break;
      case 40:
        population = 3956971;
        break;
      case 41:
        population = 4217737;
        break;
      case 42:
        population = 12801989;
        break;
      case 44:
        population = 1059361;
        break;
      case 45:
        population = 5148714;
        break;
      case 46:
        population = 884659;
        break;
      case 47:
        population = 6829174;
        break;
      case 48:
        population = 28995881;
        break;
      case 49:
        population = 3205958;
        break;
      case 50:
        population = 623989;
        break;
      case 51:
        population = 8535519;
        break;
      case 53:
        population = 7614893;
        break;
      case 54:
        population = 1792147;
        break;
      case 55:
        population = 5822434;
        break;
      case 56:
        population = 578759;
        break;
      case 60:
        population = 55465;
        break;
      case 66:
        population = 165768;
        break;
      case 69:
        population = 56882;
        break;
      case 72:
        population = 3193694;
        break;
      case 78:
        population = 106977;
        break;                             
    }
    for (let i = 1; i < results[1].length; i++) {
      let element;
      element = Math.ceil((100000 * results[1][i])/population);
      cases.push(element);
    }
    console.log(`cases per 100,000 people: `, cases);
    let deaths = [];
    for (let i = 1; i < results[2].length; i++) {
      let element;
      element = Math.ceil((1000 * results[1][i])/population);
      deaths.push(element);
    }
    console.log(`deaths per 100,000 people: `, deaths);
    let perCapitaResults = [results[0], cases, deaths, results[3]];
    console.log(`perCapitaResults: `, perCapitaResults);
    return perCapitaResults;
  },

  handleStatesNewPerCapita(csvString, fips) {
    let results = this.handleStatesTotalPerCapita(csvString, fips);
    let dateArr = results[0];
    dateArr.shift();
    let newCases = [];
    for (let i = 1; i < results[1].length; i++) {
      let element;
      element = results[1][i] - results[1][i-1];
      newCases.push(element);
    }
    console.log(`new cases per capita: `, newCases);
    let newDeaths = [];
    for (let i = 1; i < results[2].length; i++) {
      let element;
      element = results[2][i] - results[2][i-1];
      newDeaths.push(element);
    }
    console.log(`new deaths per capita: `, newDeaths);
    let newResults = [dateArr, newCases, newDeaths, results[3]];
    console.log(`newResults per capita: `, newResults);
    return newResults;
  }
}
