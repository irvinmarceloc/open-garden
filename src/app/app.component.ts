import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; 

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from "@ionic/storage";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController, 
    private navCtrl: NavController,
    private storage: Storage,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async cambiarIp() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: '',
      subHeader: '',
      message: 'Nueva IP',
      inputs:[
        {
          name: 'ip',
          type: 'text',
          placeholder: ''
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            localStorage.setItem("ip",'http://'+data.ip+':5000');
          }
        }
      ]
    });

    await alert.present();
  }

  async salir() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: '',
      subHeader: '',
      message: 'Cerrar sesión',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.storage.set("isUserLoggedIn", false);
            this.menuCtrl.close();
            this.navCtrl.navigateForward('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  cerrar(){
    this.menuCtrl.close();
  }
}
