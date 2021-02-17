import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public alertController: AlertController ) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: '',
      subHeader: 'Eliminar',
      message: '¿Eliminar este registro?',
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
          handler: () => {
            console.log('Confirm OK');
          }
        }
      ]
    });

    await alert.present();
  }


}
