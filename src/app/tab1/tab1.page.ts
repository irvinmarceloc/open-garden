import { Component,DoCheck, NgZone, OnChanges,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Params} from '@angular/router';


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
  ) {
    this.apiService.getDataPending().subscribe(arg => this.rutinas = arg);  
    
    this.route.paramMap.subscribe(arg => {
      this.apiService.getDataPending().subscribe( arg => this.rutinas = arg );
    });   
  }

}
