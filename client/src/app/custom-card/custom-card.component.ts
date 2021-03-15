import { Component, Input, OnInit } from '@angular/core';
import { AppUser } from '../users/user.model';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
})
export class CustomCardComponent implements OnInit {
  @Input() set user(user: AppUser) {
    if (user) {
      this.templateUser = user;
    }
  }

  templateUser: AppUser = { id: 1000, name: 'test-user' };

  constructor() {}

  ngOnInit(): void {}

  customCardClicked() {}

  favButtonClicked($event: any) {}

  messageButtonClicked($event: any) {}
}
