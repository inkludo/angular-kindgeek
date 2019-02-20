import { MaterialModule } from 'src/app/shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreInfoBtnComponent } from './more-info-btn.component';

@NgModule({
  declarations: [MoreInfoBtnComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[MoreInfoBtnComponent, CommonModule ]
})
export class MoreInfoBtnModule { }
