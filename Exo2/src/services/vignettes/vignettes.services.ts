import { AxiosInstance, AxiosResponse } from 'axios';

export class Vignettes {
    
    url = "db/datas.json";

	public constructor(private readonly axios: AxiosInstance) {}

	public async getAllVignettes() {
		return await this.axios.get(this.url);
	}
}