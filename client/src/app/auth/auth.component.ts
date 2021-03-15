import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authenticationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public store: Store<fromApp.AppState>,
    public router: Router
  ) {
    this.authenticationForm = fb.group({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.min(10),
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.authenticationForm.valid) {
      this.store.dispatch(AuthActions.toggleLoginState());
      this.router.navigate(['matches']);
    }
  }

  formValid() {
    return this.authenticationForm.invalid;
  }
}
