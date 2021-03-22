import { VignettesService } from './vignettes'; 

function httpService(axios: any) {
	return {
		vignettes : new VignettesService(axios),
    };
}

export default httpService;