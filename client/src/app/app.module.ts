import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
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
    // FormsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
