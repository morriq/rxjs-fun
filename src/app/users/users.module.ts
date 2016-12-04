import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UsersComponent
      }
    ])
  ],
  exports: [
    UsersComponent
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule {}