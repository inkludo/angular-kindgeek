import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/services/auth.guard';

import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
     path: 'login', 
     component: LoginComponent
  },
  { 
    path: 'register',
    component: RegisterComponent 
  },
  {
    path: 'omdb',
    loadChildren: './omdb/omdb.module#OmdbModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'map',
    loadChildren: './google-map/google-map.module#GoogleMapModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'postcodes',
    loadChildren: './postcodes/postcodes.module#PostcodesModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
