import axios from 'axios'; 

const API_URL ='http://localhost:8080';

/** The axios instance */
const instance = axios.create({
	withCredentials: false,
	baseURL: API_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});
export default instance;