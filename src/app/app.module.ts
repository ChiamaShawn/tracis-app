import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { MODULES, PROVIDERS } from './app.imports';
import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { EvacuationReviewPage } from '../pages/evacuation-review/evacuation-review';
import { TreatmentReviewPage } from '../pages/treatment-review/treatment-review';
import { PolicyInfoPage } from '../pages/policy-info/policy-info';
import { MapPage } from '../pages/map/map';
import { ReviewPage } from '../pages/review/review';
import { UserProfilePage } from '../pages/user-profile/user-profile';

@NgModule({
  declarations: [
    // App Core
    MyApp,
    LandingPage,
    MenuPage,
    HomePage,
    TabsPage,
    MapPage,
    PolicyInfoPage,
    UserProfilePage,
    EvacuationReviewPage,
    TreatmentReviewPage,
    ReviewPage
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule,
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    MenuPage,
    HomePage,
    TabsPage,
    MapPage,
    UserProfilePage,
    PolicyInfoPage,
    EvacuationReviewPage,
    TreatmentReviewPage,
    ReviewPage,

  ],
  providers: [PROVIDERS,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
