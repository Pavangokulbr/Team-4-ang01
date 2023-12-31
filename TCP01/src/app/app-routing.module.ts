import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { Page404Component } from './core/404Page/404Page.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,
  children:[
  {
    path:'pavangokul',
    loadChildren:()=>import('./modules/pavangokul/pavangokul.module').then(m=>m.PavangokulModule),
  }
  ]},
  {path:'**',component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







