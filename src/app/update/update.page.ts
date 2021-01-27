import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  constructor( private navCtrl: NavController ) {

  }

  ngOnInit() {
  }

  Back(): void{
    this.navCtrl.navigateForward("/tabs/tab1");
    //console.log('Enviado')
  }
  
}
