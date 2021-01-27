import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  rutinas: any;
  constructor(private apiService: ApiService) {
    this.apiService.getDataCompleted().subscribe(arg => this.rutinas = arg);
  }

}
