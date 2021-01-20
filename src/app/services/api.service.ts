import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routine, Schedule } from '../models/Interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //API_URI = 'http://localhost:3000/api';
  API_URI = 'http://10.42.0.111:5000';
  
  constructor(private httpClient: HttpClient) { }

  saveData(routine: Routine){
    return this.httpClient.post('http://10.42.0.111:5000/schedule/new',routine);
  }

  getDataPending(){
    return this.httpClient.get('http://10.42.0.111:5000/schedule/listall');
  }
}
