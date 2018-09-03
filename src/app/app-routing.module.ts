import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RequestpageComponent} from './components/requestpage/requestpage.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'request', component: RequestpageComponent },
  { path: 'mainpage', component: MainpageComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
