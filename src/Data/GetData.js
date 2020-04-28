import { Covid } from './data';
const axios = require('axios');

const csvStatesUrl = process.env.REACT_APP_CSV;

const csvUrl = process.env.REACT_APP_USCSV;
export const GetData = {
	handleUSRequest() {
		return axios.get(csvUrl).then(data => {
			return Covid.handleUSCSVResult(data.data);
		}).catch(error => console.error(error));
	},

	handleUSTotalPerCapita() {
		return axios.get(csvUrl).then(data => {
			return Covid.handleUSTotalPerCapita(data.data);
		}).catch(error => console.error(error));
	},

	handleUSCasesNewCases() {
		return axios.get(csvUrl).then(data => {
			return Covid.handleUSNewCases(data.data);
		}).catch(error => console.error(error));
	},

	handleStatesRequest(fips) {
		return axios.get(csvStatesUrl).then(data => {
			//console.log(data);
			 return Covid.handleStatesCSVResult(data.data, fips);
		}).catch(error => console.error(error));
	},

	handleStatesNewCases(fips) {
		return axios.get(csvStatesUrl).then(data => {
			//console.log(data);
			 return Covid.handleStatesNewCases(data.data, fips);
		}).catch(error => console.error(error));
	}
}

