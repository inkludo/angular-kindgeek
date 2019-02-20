import { MoreInfoBtnModule } from './../../shared/more-info-btn/more-info-btn.module';

import { MovieDetailsComponent } from './movie-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { SimilarMoviesComponent } from '../../components/similar-movies/similar-movies.component';
import { FavoriteBtnModule } from '../../shared/favorite-btn/favorite-btn.module';

@NgModule({
  declarations: [MovieDetailsComponent, SimilarMoviesComponent],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    MaterialModule,
    FavoriteBtnModule,
    MoreInfoBtnModule
  ]
})
export class MovieDetailsModule { }
