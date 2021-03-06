import 'reflect-metadata';
import 'zone.js';

import {NgModule, Component, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule} from '@angular/router';

import {CoreModule} from './app/core/core.module';
import {UsersModule} from './app/users/users.module';
import {MainRoutes} from './app.routes';
import {sharedConfiguration} from 'config/environment/shared';


if (sharedConfiguration.env === 'production') {
  enableProdMode();
}
if (module && module['hot']) {
  module['hot'].accept();
}

@Component({
  selector: 'inv-app',
  template: `<router-outlet></router-outlet>`
})
class AppComponent {}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    UsersModule,
    CoreModule,
    RouterModule.forRoot(MainRoutes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);