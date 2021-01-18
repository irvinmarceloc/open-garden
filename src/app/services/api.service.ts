import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routine } from '../models/Interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URI = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) { }

  saveData(routine: Routine){
    return this.httpClient.post(this.API_URI,routine);
  }
}
