import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PavangokulRoutingModule } from './pavangokul-routing.module';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PavangokulRoutingModule
  ]
})
export class PavangokulModule { }
