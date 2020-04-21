import { Covid } from './data';
const axios = require('axios');

const csvStatesUrl = process.env.REACT_APP_CSV;

const csvUrl = process.env.REACT_APP_USCSV;
export const GetData = {
	handleRequest() {
		return axios.get(csvUrl).then(data => {
			return Covid.handleCSVResult(data.data);
		}).catch(error => console.error(error));

	},

	handleStateRequest(fips) {
		return axios.get(csvStatesUrl).then(data => {
			//console.log(data);
			 return Covid.handleStateCSVResult(data.data, fips);
		}).catch(error => console.error(error));
	}
}

