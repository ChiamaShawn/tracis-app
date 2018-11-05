import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreatmentReviewPage } from './treatment-review';

@NgModule({
  declarations: [
    TreatmentReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(TreatmentReviewPage),
  ],
})
export class TreatmentReviewPageModule {}
