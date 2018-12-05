import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvacuationReviewPage } from '../evacuation-review/evacuation-review';
import { TreatmentReviewPage } from '../treatment-review/treatment-review';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  tab2Root: any = EvacuationReviewPage;
  tab3Root: any = TreatmentReviewPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}