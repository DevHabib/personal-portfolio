import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewModule } from './modules/main-view/main-view.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
