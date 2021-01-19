import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  rutinas: any;

  constructor(private apiService: ApiService) {
    this.apiService.getDataPending().subscribe(arg => this.rutinas = arg);
  }


}
