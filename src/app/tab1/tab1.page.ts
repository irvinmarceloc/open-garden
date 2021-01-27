import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';
import { ScheduleSend } from '../models/Interface'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  rutinas: any;
  @Output() dataClicked: EventEmitter<any> = new EventEmitter();

  schedule: ScheduleSend ;

  constructor(
    private apiService: ApiService,
    private navCtrl: NavController
  ) {
    this.apiService.getDataPending().subscribe(arg => this.rutinas = arg);
  }
  
  SendEditar(): void{
    this.navCtrl.navigateForward("/update");
    this.dataClicked.emit(this.schedule);
    console.log(this.schedule)
    //console.log('Enviado')
  }
  
  ngOnInit(): void{
    
  }
}
