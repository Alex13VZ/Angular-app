import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MiddleComponentComponent } from './middle-component/middle-component.component';
import { BottomComponentComponent } from './bottom-component/bottom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MiddleComponentComponent,
    BottomComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
