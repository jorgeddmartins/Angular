import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LeadsComponent } from './leads/leads.component';
import { NotFoundComponent } from './NotFound/NotFound.component';


const routes: Routes = [

	{ path: '', component: LoginComponent },
	{ path: 'leads', component: LeadsComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
