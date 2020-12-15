import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/pages/landing/landing.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
