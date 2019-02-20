import { AuthGuard } from './../auth/services/auth.guard';
import { MovieDetailsModule } from './modules/movie-details/movie-details.module';

import { OmdbComponent } from './omdb.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: OmdbComponent,
      children: [
        { path: '', redirectTo: 'search', pathMatch: 'full'},
        {
          path: 'search',
          loadChildren: './modules/search-movies/search-movies.module#SearchMoviesModule'
        },
        {
          path: 'search/:id',
          loadChildren:  './modules/movie-details/movie-details.module#MovieDetailsModule'
        },
        {
          path: 'favorite',
          loadChildren:  './modules/favorite-movies/favorite-movies.module#FavoriteMoviesModule'
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmdbRoutingModule { }
