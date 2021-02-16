import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleSend } from '../models/Interface';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})

export class ApiService  {
  
  API_URI ;
  
  
  constructor(private httpClient: HttpClient, private storage: Storage) { 
      this.API_URI = localStorage.getItem('ip');
      console.log(this.API_URI)
  }

  

  getDataPending(){

    return this.httpClient.get(this.API_URI+'/schedule/listPending');
  }

  getDataCompleted(){

    return this.httpClient.get(this.API_URI+'/schedule/listCompleted');
  }

  getData(id: number){
    
    return this.httpClient.get(this.API_URI+'/schedule/getSchedule/'+ id);
  }

  saveData(routine: ScheduleSend){

    return this.httpClient.post(this.API_URI+'/schedule/new',routine);
  }

  delete(id: string){

    return this.httpClient.delete(this.API_URI+'/schedule/delete/'+id);
  }
  
  update(id:number, update: any){

    return this.httpClient.put(this.API_URI+'/schedule/update/'+id,update);
  }
  
}
