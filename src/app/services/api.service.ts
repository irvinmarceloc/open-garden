import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleSend } from '../models/Interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //API_URI = 'http://localhost:3000/api';
  API_URI = 'http://localhost:5000';
  // http://10.42.0.111:5000/schedule/listall
  
  constructor(private httpClient: HttpClient) { }

  getDataPending(){
    return this.httpClient.get('http://localhost:5000/schedule/listPending');
  }

  getDataCompleted(){
    return this.httpClient.get('http://localhost:5000/schedule/listCompleted');
  }

  getData(id: number){
    return this.httpClient.get('http://localhost:5000/schedule/getSchedule/'+ id);
  }

  saveData(routine: ScheduleSend){
    return this.httpClient.post('http://localhost:5000/schedule/new',routine);
  }

  deleteGame(id: string){
    return this.httpClient.delete(this.API_URI+'/schedule/delete'+id);
  }
  
  updateGame(id: number, update: any){
    return this.httpClient.put(this.API_URI+'/schedule/update'+id,update);
  }
  
}
