import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, AnimationController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import _ from 'lodash';

import { BobToursService } from 'src/app/services/bob-tours.service';
import { FavoritesService } from 'src/app/services/favorites.service';

import { RequestPage } from './../request/request.page';
import { MapPage } from './../map/map.page';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tour = null;
  IsFavorite: boolean;

  region: string;
  tourtype: string;

  showSocial: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public btService: BobToursService,
    public favService: FavoritesService,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private animationCtrl: AnimationController,
    private socialSharing: SocialSharing
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tour = _.find(this.btService.tours, ['ID', parseInt(id)]);
    this.IsFavorite = this.favService.favIDs.indexOf(parseInt(id)) != -1;
    this.region = _.find(this.btService.regions, { 'ID': this.tour.Region }).Name;
    this.tourtype = _.find(this.btService.tourtypes, { 'ID': this.tour.Tourtype }).Name;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Tour',
      buttons: [
        {
          text: 'Request',
          handler: () => {
            this.presentModal();
          }
        },
        {
          text: 'Map/Route',
          handler: () => {
            this.presentMap();
          }
        },
        {
          text: (this.IsFavorite) ? 'Remove from Favorites'
            : 'Add to Favorites',
          role: (this.IsFavorite) ? 'destructive' : '',
          handler: () => {
            if (this.IsFavorite) {
              this.presentAlert();
            } else {
              this.favService.add(this.tour);
              this.IsFavorite = true;
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Remove Favorite?',
      message: 'Do you really want to remove this Favorite?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            this.favService.remove(this.tour);
            this.IsFavorite = false;
          }
        }
      ]
    });
    await alert.present();
  }

  // User clicked share button
  toggleSocial() {

    this.showSocial = !this.showSocial;

    const animatedButton = document.getElementById('animatedButton');
    const fadeIn = this.animationCtrl.create().addElement(animatedButton).duration(400).fromTo('opacity', 0, 1);
    const fadeOut = this.animationCtrl.create().addElement(animatedButton).duration(300).fromTo('opacity', 1, 0);

    if (this.showSocial) {
      fadeOut.play();
    } else {
      fadeIn.play();
    }

  }

  // User clicked one of the social app buttons
  openSocial(app) {
    const sbj = 'Planning a tour';
    const img = 'http://ionic.andreas-dormann.de/img/big/'
      + this.tour.Image;
    const msg = 'BoB Tours offers a great tour titled "'
      + this.tour.Title
      + '".\n\nAre you in?\n\n'
      + 'Shipped from my BoB Tours app';

    this.socialSharing.canShareVia(app, msg, sbj, img)
      .then(() => {
        switch (app) {
          case 'facebook':
            this.socialSharing.shareViaFacebook(msg, img);
            break;
          case 'instagram':
            this.socialSharing.shareViaInstagram(msg, img);
            break;
          case 'twitter':
            this.socialSharing.shareViaTwitter(msg, img);
            break;
          case 'whatsapp':
            this.socialSharing.shareViaWhatsApp(msg, img);
            break;
        }
      })
      .catch(() => {
        this.errorOpenSocial(app, msg, sbj, img);
      });
  }

  // Error trying to open a social app
  async errorOpenSocial(app, msg, sbj, image) {
    const alert = await this.alertCtrl.create({
      header: app + ' doesn\'t work',
      message: 'Unfortunately an error occurred while sharing via ' + app + '!\n\n'
        + 'Would you like to try an alternative?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Simple email',
          handler: () => {
            const mailmsg = msg.replace(new RegExp('\n', 'g'), '%0A');
            window.location.href = 'mailto:?subject=' + sbj + '&body=' + mailmsg;
          }
        },
        {
          text: 'Yes, absolutely',
          handler: () => {
            this.socialSharing.share(msg, sbj, image);
          }
        }
      ]
    });
    await alert.present();
  }

  // User clicked 'request' button
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: RequestPage,
      componentProps: this.tour
    });
    modal.present();
  }

  // User clicked 'map' option
  async presentMap() {
    const modal = await this.modalCtrl.create({
      component: MapPage,
      componentProps: this.tour
    });
    modal.present();
  }

}
