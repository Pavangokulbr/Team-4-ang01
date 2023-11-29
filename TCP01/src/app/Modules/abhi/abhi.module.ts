import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbhiRoutingModule } from './abhi-routing.module';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AbhiRoutingModule
  ]
})
export class AbhiModule { }
