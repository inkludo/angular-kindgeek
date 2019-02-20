import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteMoviesRoutingModule } from './favorite-movies-routing.module';
import { FavoriteMoviesComponent } from './favorite-movies.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [FavoriteMoviesComponent],
  imports: [
    CommonModule,
    FavoriteMoviesRoutingModule, 
    MaterialModule
  ]
})
export class FavoriteMoviesModule { }
