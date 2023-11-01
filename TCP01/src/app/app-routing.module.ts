import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
  path:'',
  component:LayoutComponent,
  children:[

			{
				path:'abhi',
				loadChildren: () => import('./modules/abhi/abhi.module').then((m) => m.AbhiModule),
			},

    
			{
				path:'pavangokul',
				loadChildren: () => import('./modules/pavangokul/pavangokul.module').then((m) => m.PavangokulModule),
			},

    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







