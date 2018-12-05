import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { LoginOnePage } from '../login/login-one/login-one';
import { LoginListPage } from '../login/login';
import { PolicyInfoPage } from '../policy-info/policy-info';
import { MapPage } from '../map/map';
import { ReviewPage } from '../review/review';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = PolicyInfoPage;
  tab2Root = MapPage;
  tab3Root = ReviewPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
