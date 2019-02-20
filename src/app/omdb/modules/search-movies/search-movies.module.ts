import { MoreInfoBtnModule } from './../../shared/more-info-btn/more-info-btn.module';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchMoviesComponent } from './search-movies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMoviesRoutingModule } from './search-movies-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FavoriteBtnModule } from '../../shared/favorite-btn/favorite-btn.module';

@NgModule({
  declarations: [SearchMoviesComponent],
  imports: [
    CommonModule,
    SearchMoviesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FavoriteBtnModule,
    MoreInfoBtnModule
  ]
})
export class SearchMoviesModule { }
