import {Component, OnInit} from '@angular/core';
import {SocketService} from '../core/socket.service';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {FormBuilder, FormGroup} from '@angular/forms';

import {IUser} from 'server/api/users/users.model';
import {USERS_API, USERS_API_SINGLE, USERS_API_USERID} from '../../../server/api/users/users.constants';


@Component({
  selector: 'inv-users',
  template: `
    <form [formGroup]="form">
        <input formControlName="name">
    </form>
    <ul *ngFor="let user of (users | async)">
        <li>
            <form (submit)="update(user);">
                <input [(ngModel)]="user.name" name="name">
                <input type="submit">
                <button (click)="delete(user)" type="button">delete</button>
            </form>
        </li>
    </ul>
    `
})
export class UsersComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    name: ['']
  });

  public users: Observable<IUser[]> = Observable
    .merge(
      Observable.fromEvent(this.socket, USERS_API),
      this.http.get(USERS_API).map(data => JSON.parse(data['_body']))
    );

  public update(user: IUser): void {
    this.http.put(USERS_API, user)
      .subscribe();
  }

  public delete(user: IUser): void {
    this.http.delete(
      USERS_API_SINGLE.replace(USERS_API_USERID, user._id)
    )
      .subscribe();
  }

  public ngOnInit(): void {
    this.form
      .valueChanges
      .debounceTime(500)
      .subscribe(formValue => {
        this.http.post(USERS_API, formValue).subscribe();
      });
  }

  constructor(
    private fb: FormBuilder,
    private socket: SocketService,
    private http: Http) {
  }
}
