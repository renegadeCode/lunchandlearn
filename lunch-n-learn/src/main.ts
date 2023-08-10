import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppConfig } from "./app/models/config/AppConfig.model";
import { environment } from "./app/environments/environment";

fetch('assets/app-config.json')
	.then(response => response.json())
	.then(json => new AppConfig(json.attendeeList))
	.catch(error => {
		console.error("Error when processing app config: ", error);
		return new AppConfig();
	})
	.then(config => {
		environment.config = config;
		platformBrowserDynamic([])
			.bootstrapModule(AppModule)
			.catch(error => console.error(error));
	});
