import { Component, ViewChild } from '@angular/core';
import { AlertController, App, LoadingController, NavController, Slides, IonicPage, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home'
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  public loginForm: any;
  register_form = {};
  next_of_kin_1 = {};
  next_of_kin_2 = {};
  public backgroundImage = 'assets/img/background/background-6.jpg';
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    private nav: NavController,
    private http: Http
  ) { }
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  goToLogin() {
    this.slider.slideTo(1);
    console.log('Go to login clicked');
  }

  goToSignup() {
    this.slider.slideTo(2);
  }
  secondSignUp() {
    this.slider.slideTo(3);
  }
  thirdSignUp() {
    this.slider.slideTo(4);
  }
  fourthSignUp() {
    this.slider.slideTo(5);
  }
  lastSignUp() {

  }
  firstSignUp() {
    this.slider.slideTo(2);
  }
  previousSignUp() {
    this.slider.slideTo(2);
  }


  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }
  // openMenu(){
  //   this.navCtrl.push(MenuPage);
  // }
  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  login() {
    this.presentLoading('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
  }

  signup() {
    this.presentLoading('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
  }
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }

  register() {

    this.nav.push(TabsPage);
    //   console.log(this.register_form);
    //   console.log(this.next_of_kin_2);
    //   console.log(this.next_of_kin_1);  
    //   this.register_form['next_of_kins'] = JSON.stringify([this.next_of_kin_1, this.next_of_kin_2]);
    //   console.log(this.register_form);
    //   this.http.post('http://tracis-api.envisagemobile.com/api/oauth/policy/signup', this.register_form).subscribe(response => {
    //     this.presentLoading('Thanks for signing up!');
    //     console.log(response);
    //   })
    // }
  }

}
