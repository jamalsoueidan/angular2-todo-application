import 'angular2/bundles/angular2-polyfills';
import 'rxjs/Rx';

import { bootstrap } from "angular2/platform/browser"
import { HTTP_PROVIDERS } from 'angular2/http';
import { ApplicationComponent } from "./application.component";

bootstrap(ApplicationComponent, [HTTP_PROVIDERS]);
