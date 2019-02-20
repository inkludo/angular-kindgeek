import { MaterialModule } from 'src/app/shared/material.module';
import { FavoriteBtnComponent } from './favorite-btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FavoriteBtnComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  
  exports:[FavoriteBtnComponent, CommonModule ]
})
export class FavoriteBtnModule { }
