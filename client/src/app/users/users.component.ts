import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('appUsers').subscribe((users) => {
      if (users) {
        console.log("store.select('appUsers'): ");
        console.log(users.appUsers);
      }
    });
  }

  getUsers() {
    console.log('Get Users works.');
  }
}