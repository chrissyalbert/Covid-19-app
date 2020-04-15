import { Covid } from './data';
const axios = require('axios');

const csvUrl = process.env.REACT_APP_CSV;  //'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv';

export const GetData = {
	handleRequest() {
		return axios.get(csvUrl).then(data => {
			//console.log(data);
			 return Covid.handleCSVResult(data.data);
		}).catch(error => console.error(error));
	}
}
