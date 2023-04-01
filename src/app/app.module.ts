import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MiddleComponentComponent } from './middle-component/middle-component.component';
import { BottomComponentComponent } from './bottom-component/bottom-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { NotesComponent } from './notes/notes.component';
import { NotesPrimaryService } from './services/notes-primary.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MiddleComponentComponent,
    BottomComponentComponent,
    DialogComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatIconModule,MatDialogModule,
    HttpClientModule
  ],
  providers: [NotesPrimaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
