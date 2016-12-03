import 'reflect-metadata';
import 'zone.js';

import {NgModule, Component} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {CoreModule} from "./app/core/core.module";
import {HomeModule} from "./app/home/home.module";
import {RouterModule} from "@angular/router";
import {MainRoutes} from "./main.routes";

@Component({
  selector: 'inv-app',
  template: `<router-outlet></router-outlet>`
})
class AppComponent {}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule,
    CoreModule,
    RouterModule.forRoot(MainRoutes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);