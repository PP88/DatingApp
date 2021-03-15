import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { MatchesComponent } from './matches/matches.component';
import { MessagesComponent } from './messages/messages.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'sign-up', component: WelcomeComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'user-profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
