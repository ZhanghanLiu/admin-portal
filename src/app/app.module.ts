import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatInputModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
