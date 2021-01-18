import { Component, OnInit } from '@angular/core';
import { Routine } from '../models/Interface'
import { 
  FormGroup, 
  FormBuilder, 
  FormControl, 
  Validators 
} from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  routineForm: FormGroup;
  validation_messages = {
    from: [{type:"required", message:"La fecha de inicio no puede quedar vacía"}],
    to: [{type:"required", message:"La fecha de fin no puede quedar vacía"}],
    repeat: [{type:"required", message:"Elija ¨Solo hoy¨ o ¨Cada día¨"}],
    zone: [{type:"required", message:"Elija una zona"}]
  }
  constructor(
    private formBuilder: FormBuilder,
    private apiServie: ApiService
  ) {
    this.routineForm = this.formBuilder.group({
      from: new  FormControl(        
      "",
      Validators.compose([
        Validators.required,
      ])),
      to: new  FormControl(        
      "",
      Validators.compose([
        Validators.required,
      ])),
      repeat: new  FormControl(        
      "",
      Validators.compose([
        Validators.required,
      ])),
      zone: new  FormControl(
      "",
      Validators.compose([
        Validators.required,
      ]))
    })
  }


  Send(routineData: Routine){
    this.apiServie.saveData(routineData).toPromise().then(resp =>{
      console.log("resp", resp);
   }).catch(error =>{
      console.log("error ", error );
   });
   console.log(routineData);
  }

  ngOnInit() {}
}
