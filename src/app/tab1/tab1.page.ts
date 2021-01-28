import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';
//import { ScheduleSend } from '../models/Interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {

  rutinas: any;
  
  constructor(
    private apiService: ApiService,
    
  ) {
    this.apiService.getDataPending().subscribe(arg => this.rutinas = arg);  
    console.log(this.rutinas)
  }
  
  ngOnInit(): void{
    
  }
}


  //@Output() dataClicked: EventEmitter<ScheduleSend> = new EventEmitter();
  //private navCtrl: NavController
  /*
  SendEditar(  schedule: ScheduleSend ): void{
    this.navCtrl.navigateForward("/update");
    this.dataClicked.emit(schedule);
  }
  */