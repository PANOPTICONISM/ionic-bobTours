import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { MapPage } from './pages/map/map.page';
import { MapPageModule } from './pages/map/map.module';
import { RequestPage } from './pages/request/request.page';
import { RequestPageModule } from './pages/request/request.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  entryComponents: [AboutComponent, RequestPage, MapPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RequestPageModule,
    MapPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    SocialSharing,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
