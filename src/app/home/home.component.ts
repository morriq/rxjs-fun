import {Component, OnInit} from '@angular/core';
import {SocketService} from '../core/socket.service';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {FormBuilder, FormGroup} from '@angular/forms';

import {IUser} from 'server/api/users/users.model';
import {usersApi} from 'server/api/users/routes';


@Component({
  selector: 'inv-home',
  template: `
    <form [formGroup]="form">
        <input formControlName="name">
    </form>
    <ul *ngFor="let user of (users | async)">
        <li>
            <form (submit)="update(user);">
                <input [(ngModel)]="user.name" name="name">
                <input type="submit">
            </form>
        </li>
    </ul>
    `
})
export class HomeComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    name: ['']
  });

  public users: Observable<IUser[]> = Observable
    .merge(
      Observable.fromEvent(this.socket, usersApi),
      this.http.get(usersApi).map(data => JSON.parse(data['_body']))
    );

  public update(user: IUser): void {
    this.http.put(usersApi, user)
      .subscribe();
  }

  public ngOnInit(): void {
    this.form
      .valueChanges
      .debounceTime(500)
      .subscribe(formValue => {
        this.http.post(usersApi, formValue).subscribe();
      });
  }

  constructor(
    private fb: FormBuilder,
    private socket: SocketService,
    private http: Http) {
  }
}
