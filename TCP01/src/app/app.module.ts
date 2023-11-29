import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { Page404Component } from './core/404Page/404Page.component';
import { teamModule } from './modules/team4.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    teamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
