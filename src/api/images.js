import api from './index';
import { config } from '../../config';

const apiKey = config.NASA_API_KEY;

export default {
	get() {
		return api.get(`planetary/apod?api_key=${apiKey}&start_date=2021-09-01`);
	}
};
