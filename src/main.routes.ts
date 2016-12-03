import {Routes} from "@angular/router";


export const MainRoutes: Routes = [
  {
    path: '**',
    loadChildren: './app/home/home.module#HomeModule'
  }
];