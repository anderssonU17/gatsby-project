import axios from 'axios';

const clienteAxios = axios.create({
	baseURL: 'https://disdelsagt.com/'
});

export default clienteAxios;
