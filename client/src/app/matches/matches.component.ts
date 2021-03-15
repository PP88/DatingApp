import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { AppUser } from '../users/user.model';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  users: AppUser[];
  constructor(public store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('appUsers').subscribe((users) => {
      this.users = users.appUsers;
    });
  }
}
