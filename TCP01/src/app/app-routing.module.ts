import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
  path:'',
  component:LayoutComponent,
  children:[
    // ./modules/pavangokul/pavangokul.module
			{
				path:'pavangokul',
				loadChildren: () => import('./Modules/pavangokul/pavangokul.module').then((m) => m.PavangokulModule),
			},

    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






