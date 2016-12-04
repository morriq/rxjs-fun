import {Routes} from "@angular/router";


export const MainRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './app/home/home.module#HomeModule'
  }
];