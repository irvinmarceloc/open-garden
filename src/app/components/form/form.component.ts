import { Component, Input, OnInit } from '@angular/core';
import { ScheduleSend } from '../../models/Interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input()  schedule : ScheduleSend;

  constructor() { 
    console.log(this.schedule)
  }

  ngOnInit() {}

}
