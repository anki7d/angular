import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './layout/auth/auth.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PublicComponent } from './layout/public/public.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./layout/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'public',
    component: PublicComponent,
    loadChildren: () => import('./layout/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'user',
    component: DashboardComponent,
    loadChildren: () => import('./layout/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PublicComponent,
    loadChildren: () => import('./layout/public/public.module').then((m) => m.PublicModule),

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
