import { Component, OnInit } from '@angular/core';
import { ScheduleSend } from '../models/Interface'
import { LoadingController } from '@ionic/angular';
import { 
  FormGroup, 
  FormBuilder, 
  FormControl, 
  Validators 
} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  routineForm: FormGroup;
  validation_messages = {
    date_from: [{type:"required", message:"Fecha de inicio NULL"}],
    time_from: [{type:"required", message:"Hora de inicio NULL"}],
    date_to: [{type:"required", message:"Fecha de fin NULL"}],
    time_to: [{type:"required", message:"Hora de fin NULL"}],
    zone_id: [{type:"required", message:"Elija zona"}]
  }
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private navCtrl: NavController,
    public loadingController: LoadingController
  ) {

    this.routineForm = this.formBuilder.group({
      date_from: new  FormControl(        
      "",
      Validators.compose([
        Validators.required,
      ])),
      time_from: new  FormControl(        
        "",
        Validators.compose([
          Validators.required,
      ])),
      date_to: new  FormControl(        
      "",
      Validators.compose([
        Validators.required,
      ])),
      time_to: new  FormControl(        
        "",
        Validators.compose([
          Validators.required,
        ])),
      zone_id: new  FormControl(
      "",
      Validators.compose([
        Validators.required,
      ]))
    })
  }


  Send(routineData: ScheduleSend){
    routineData.status = 'pending';
    routineData.date_from = this.CortarFecha(routineData.date_from);
    routineData.time_from = this.CortarHora(routineData.time_from);
    routineData.date_to = this.CortarFecha(routineData.date_to);
    routineData.time_to = this.CortarHora(routineData.time_to);
  
    this.apiService.saveData(routineData).toPromise().then(resp =>{
      console.log("resp", resp);
      this.presentLoading();
      this.navCtrl.back();
    }).catch(error =>{
      console.log("error ", error );
      this.presentLoading();
      this.navCtrl.navigateForward('/tabs/tab1')
    });
   console.log(routineData);
  }
  
  CortarFecha(input: String){
    let ouput = '';
    for (let i = 0; i < 10; i++) {
      ouput = ouput + input[i]
    }
    return ouput;
  }

  CortarHora(input: String){
    let ouput = '';
    for (let i = 11; i < 16; i++) {
     ouput = ouput + input[i]
    }
    return ouput;
  }    

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Guardando por favor espere',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ngOnInit() {}
}
