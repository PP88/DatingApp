import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as authActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  logedIn: boolean = false;

  constructor(public store: Store<fromApp.AppState>, public router: Router) {}

  ngOnInit(): void {
    this.store.select('auth').subscribe((state) => {
      this.logedIn = state.logedIn;
    });
  }

  datingAppClicked() {
    if (this.logedIn) {
      this.router.navigate(['matches']);
    } else {
      this.router.navigate(['sign-up']);
    }
  }

  matchesClicked() {
    this.router.navigate(['matches']);
  }

  listsClicked() {
    this.router.navigate(['lists']);
  }

  messagesClicked() {
    this.router.navigate(['messages']);
  }

  editProfileClicked() {
    this.router.navigate(['user-profile']);
  }

  logoutClicked() {
    this.store.dispatch(authActions.toggleLoginState());
    this.router.navigate(['sign-up']);
  }
}
