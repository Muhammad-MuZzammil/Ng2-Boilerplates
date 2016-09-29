import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './components/AppModule/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
