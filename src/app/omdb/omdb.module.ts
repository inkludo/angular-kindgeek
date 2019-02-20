import { MaterialModule } from 'src/app/shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmdbRoutingModule } from './omdb-routing.module';
import { OmdbComponent } from './omdb.component';
import { OmdbHeaderComponent } from './components/omdb-header/omdb-header.component';
import { SimilarMoviesComponent } from './components/similar-movies/similar-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OmdbComponent, OmdbHeaderComponent],
  imports: [
    CommonModule,
    OmdbRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class OmdbModule { }
