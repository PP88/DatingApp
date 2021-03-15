import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface State {
  logedIn: boolean;
}

export const initialState: State = {
  logedIn: false,
};

const _counterReducer = createReducer(
  initialState,
  on(AuthActions.toggleLoginState, (state) => {
    return { logedIn: !state.logedIn };
  })
);

export function authReducer(state: State, action: Action) {
  return _counterReducer(state, action);
}
