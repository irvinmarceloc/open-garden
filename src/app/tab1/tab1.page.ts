import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

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
  }
  
  ngOnInit(): void{
    
  }
}
