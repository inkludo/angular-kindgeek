import { environment } from './../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapRoutingModule } from './google-map-routing.module';
import { GoogleMapComponent } from './google-map.component';

import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from '../shared/material.module';
import { GoogleMapHeaderComponent } from './google-map-header/google-map-header.component';

@NgModule({
  declarations: [GoogleMapComponent, GoogleMapHeaderComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot(environment.google),
    GoogleMapRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class GoogleMapModule { }
