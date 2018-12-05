import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolicyInfoPage } from './policy-info';

@NgModule({
  declarations: [
    PolicyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PolicyInfoPage),
  ],
})
export class PolicyInfoPageModule {}
