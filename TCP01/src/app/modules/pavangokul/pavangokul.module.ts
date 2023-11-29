import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PavangokulRoutingModule } from './pavangokul-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PavangokulRoutingModule
  ]
})
export class PavangokulModule { }
