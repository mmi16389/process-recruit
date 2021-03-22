import { AxiosInstance, AxiosResponse } from 'axios';

export class Vignettes {
     
	public constructor(private readonly axios: AxiosInstance) {}

	public async getAllVignettes() {
		return await this.axios.get('./vignettes');
	}
}