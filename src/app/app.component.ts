import { Component, OnInit } from '@angular/core';

import { Platform, PopoverController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BobToursService } from './services/bob-tours.service';

import { AboutComponent } from './components/about/about.component';

import { Storage } from '@ionic/storage';
import {
  LocalNotifications,
  ELocalNotificationTriggerUnit,
} from '@ionic-native/local-notifications/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Favorites',
      url: '/favorites',
      icon: 'star',
    },
    {
      title: 'Regions',
      url: '/regions',
      icon: 'images',
    },
    {
      title: 'Tour-Types',
      url: '/tour-types',
      icon: 'bus',
    },
    {
      title: 'Slideshow',
      url: '/slideshow',
      icon: 'play',
    },
  ];

  settings: any = {};
  price: any = { lower: 80, upper: 400 };
  hits: number = 24;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private btService: BobToursService,
    private popoverCtrl: PopoverController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private router: Router,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.btService.initialize();
      this.loadSettings();
    });
  }

  // Load settings
  loadSettings() {
    this.storage.create().then(() => {
      this.storage.get('settings').then((settings) => {
        if (settings == null) {
          this.settings.style = 'summer-style';
        } else {
          this.settings = settings;
        }
      });
    });
  }

  // User has changed his/her settings.
  updateSettings() {
    this.storage.set('settings', this.settings);
    this.setNotifications();
  }

  // User clicked on 'About this app'
  async about() {
    const popover = await this.popoverCtrl.create({
      component: AboutComponent,
      translucent: true,
    });
    await popover.present();
  }

  // User has changed price range.
  filterByPrice() {
    this.hits = this.btService.filterTours(this.price);
  }

  ngOnInit() {}

  // A weekly notification is scheduled,
  // if notifications are activated.
  setNotifications() {
    if (this.settings.notifications == true) {
      this.localNotifications.schedule({
        id: 1,
        title: 'BoB Tours recommends:',
        text: 'Find a tour and enjoy life! Tap here...',
        data: { path: '/slideshow' },
        trigger: { every: ELocalNotificationTriggerUnit.WEEK },
      });
      this.onNotificationClick();
      // cancels/deactivates notifications.
    } else {
      this.localNotifications.cancelAll();
    }
  }

  // User clicked on the notification. The app shows
  // a message. After user clicked the button, the app shows
  // the slideshow.
  onNotificationClick() {
    this.localNotifications.on('click').subscribe((notification) => {
      let path = notification.data ? notification.data.path : '/';
      this.alertCtrl
        .create({
          header: notification.title,
          message: 'Be inspired by the following slideshow and book a tour!',
          buttons: [
            {
              text: 'Good idea!',
              handler: () => this.router.navigateByUrl(path),
            },
          ],
        })
        .then((alert) => alert.present());
    });
  }
}
