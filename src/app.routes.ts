import {Routes} from '@angular/router';


export const MainRoutes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    loadChildren: './app/users/users.module#UsersModule'
  }
];