import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    // UsersComponent,
    // NavBarComponent,
    // AuthComponent,
    // WelcomeComponent,
    // MatchesComponent,
    // CustomCardComponent,
    // ListsComponent,
    // MessagesComponent,
    // UserProfileComponent,
    // UserPhotosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ReactiveFormsModule,
    FormsModule,
    // ScrollingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot(fromApp.appReducer),
    // FlexLayoutModule,
    // MatButtonModule,
    // MatGridListModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatInputModule,
    // MatIconModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatTooltipModule,
    // MatButtonToggleModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
