import { ActionReducerMap } from '@ngrx/store';
import * as fromAppUsers from '../users/store/app-users.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
  appUsers: fromAppUsers.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  appUsers: fromAppUsers.appUsersReducer,
  auth: fromAuth.authReducer,
};
