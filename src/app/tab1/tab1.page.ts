import { Component,DoCheck, NgZone, OnChanges,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Params} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {

  rutinas: any;
  
  constructor(
    private apiService: ApiService,    
    private route: ActivatedRoute,
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) {
    this.apiService.getDataPending().subscribe(arg => this.rutinas = arg);  
    
    this.route.paramMap.subscribe(arg => {
      this.apiService.getDataPending().subscribe( arg => this.rutinas = arg );
    });   
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  goTo(id){
    this.navCtrl.navigateForward('/tabs/tab1/update/'+id)
  } 
  saved(){
    this.navCtrl.navigateForward('/tabs/tab2')
  }
}
