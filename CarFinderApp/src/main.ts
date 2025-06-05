import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
});
