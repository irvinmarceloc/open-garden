import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ScheduleSend } from '../models/Interface';
import { ActivatedRoute, Params} from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  schedules: any;

  constructor( 
    private apiService: ApiService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ){
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.apiService.getData(id).subscribe( arg => this.schedules = arg);
    });    
  }
  ngOnInit(): void {

  }

  Back(): void{
    this.navCtrl.navigateForward("/tabs/tab1");
  }
  
}
