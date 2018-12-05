import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {
  cards = [
    {
      imageUrl: 'assets/img/card/advance-card-map-madison.png',
      name: 'Madison Map',
      ETA: '18 min',
      distance: 2.6,
      places: [
        {
          name: 'Karen Country Club',
          address: '11 N. Way St, Madison, WI 53703',
          icon: 'locate'
        },
        {
          name: 'Nairobi Hospital',
          address: '14 S. Hop Avenue, Madison, WI 53703',
          icon: 'medkit'
        }
      ]
    },

    {
      imageUrl: 'assets/img/card/advance-card-map-paris.png',
      name: 'Paris Map',
      ETA: '26 min',
      distance: 8.1,
      places: [
        {
          name: 'Aga Khan Hospital',
          address: '11 N. Way St, Madison, WI 53703',
          icon: 'locate'
        },
        {
          name: 'Mater Hospital',
          address: '14 S. Hop Avenue, Madison, WI 53703',
          icon: 'medkit'
        }
      ]
    },
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
