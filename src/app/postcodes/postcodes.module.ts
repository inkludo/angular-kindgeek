import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { PostcodesRoutingModule } from './postcodes-routing.module';
import { PostcodesComponent } from './postcodes.component';
import { PostcodesHeaderComponent } from './postcodes-header/postcodes-header.component';

@NgModule({
  declarations: [PostcodesComponent, PostcodesHeaderComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHpQUwvjE9_V16fxFkOdydAsZda8Qnwbk',
      libraries: ["places"],
    }),
    PostcodesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostcodesModule { }
