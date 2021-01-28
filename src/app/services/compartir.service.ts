import { Injectable } from '@angular/core';
import { scheduled } from 'rxjs';
import { ScheduleSend } from '../models/Interface';

@Injectable({
  providedIn: 'root'
})
export class CompartirService {

  constructor() { }

  schedule: ScheduleSend;

  enviar(recibir: ScheduleSend) {
    this.schedule = recibir;
  }
  recibir(){
    return this.schedule;
  }
}
