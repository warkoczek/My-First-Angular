import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {ServerComponent} from "./components/server/app.component";
import { ServersComponent } from './servers/servers.component';
import {WarningComponent} from "./warning-alert/warning.component";
import {SuccessComponent} from "./success-alert/success.component";
import {FormsModule} from "@angular/forms";
import {UsernameComponent} from "./username-update/username.component";
import {DisplayDetailsComponent} from "./display-details/display-details.component";



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    UsernameComponent,
    DisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
