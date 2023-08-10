import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { LunchToolbarComponent } from './home/lunch-toolbar/lunch-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LunchRoomComponent } from './home/lunch-room/lunch-room.component'; 
import { LunchService } from "./services/lunch.service";
import { VirtualRoomComponent } from './home/virtual-room/virtual-room.component';
import { LunchNLearnComponent } from './home/lunch-n-learn/lunch-n-learn.component';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select';
import { ParticpantSelectComponent } from './home/particpant-select/particpant-select.component';
import { ParticipantListComponent } from './home/participant-list/participant-list.component';
import { ParticipantComponent } from './home/participant-list/participant/participant.component'; 
import { BrowserStorageService } from "./services/browser-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LunchToolbarComponent,
    LunchRoomComponent,
    VirtualRoomComponent,
    LunchNLearnComponent,
    ParticpantSelectComponent,
    ParticipantListComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatButtonModule,
	MatIconModule,
	MatSelectModule
  ],
  providers: [
	LunchService,
	BrowserStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
