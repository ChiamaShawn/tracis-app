import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { MODULES, PROVIDERS } from './app.imports';
import { LandingPage } from '../pages/landing/landing';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { EvacuationReviewPage } from '../pages/evacuation-review/evacuation-review';
import { TreatmentReviewPage } from '../pages/treatment-review/treatment-review';

@NgModule({
  declarations: [
    // App Core
    MyApp,
    LandingPage,
    MenuPage,
    MapPage,
    EvacuationReviewPage,
    TreatmentReviewPage
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    MenuPage,
    MapPage,
    EvacuationReviewPage,
    TreatmentReviewPage

  ],
  providers: [PROVIDERS,
    Geolocation,
     { provide: ErrorHandler, useClass: IonicErrorHandler }
      ]
})
export class AppModule { }
