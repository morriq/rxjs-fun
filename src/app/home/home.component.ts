import {Component, OnInit} from "@angular/core";
import {SocketService} from "../core/socket.service";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'inv-home',
  template: `
    <ul *ngFor="let user of (users | async)">
        <li>{{ user | json }}</li>
    </ul>
    <form [formGroup]="form">
        <input formControlName="name">
    </form>
    `
})
export class HomeComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    name: ['']
  });

  public users = Observable
    .merge(
      Observable.fromEvent(this.socket, 'users'),
      this.http.get('users').map(data => JSON.parse(data['_body']))
    );

  public ngOnInit(): void {
    this.form
      .valueChanges
      .debounceTime(500)
      .subscribe(formValue => {
        this.http.put('users', formValue).subscribe();
      });
  }

  constructor(
    private fb: FormBuilder,
    private socket: SocketService,
    private http: Http) {
  }
}
