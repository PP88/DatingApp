import { Action, createReducer, on } from '@ngrx/store';
import { AppUser } from '../user.model';
import * as AppUsersActions from './app-users.actions';

export interface State {
  appUsers: AppUser[];
}

export const initialState: State = {
  appUsers: [
    { id: 1, name: 'eins' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
    { id: 4, name: 'four' },
    { id: 5, name: 'five' },
    { id: 6, name: 'six' },
  ],
};

const _counterReducer = createReducer(
  initialState,
  on(AppUsersActions.getUsers, (users) => {
    return users;
  }),
  on(AppUsersActions.getUser, (user) => {
    return user;
  })
);

export function appUsersReducer(state: State, action: Action) {
  return _counterReducer(state, action);
}
