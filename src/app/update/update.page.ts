import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rutina } from '../models/Interface';
import { ActivatedRoute, Params} from '@angular/router';
import { ApiService } from '../services/api.service';
import { 
  FormGroup, 
  FormBuilder, 
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  rutinas: any;
    
  routineForm: FormGroup;

  mensaje: String = '';

  constructor( 
    private apiService: ApiService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ){    

  }
  ngOnInit(): void {
    
    
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.apiService.getData(id)
      .subscribe( 
      arg => {
        this.rutinas = arg;
        console.log(this.rutinas);
        this.Iniciar();
      },
        err => console.log(err) 
      );
    });   
    
    
  }

  Iniciar(){
    this.routineForm = this.formBuilder.group({
      date_from: new  FormControl(this.rutinas[0]["date_from"]),
      time_from: new  FormControl(this.rutinas[0]["date_from"]),
      date_to: new  FormControl(this.rutinas[0]["date_to"]),
      time_to: new  FormControl(this.rutinas[0]["date_to"]),
      zone_id: new  FormControl(this.rutinas[0]["zone_id"])
    })
    
  }
    
  Update(routineData: Rutina){
    console.log(routineData);
    this.apiService.update(routineData);
    this.mensaje = "Actualizado con exito";
    this.rutinas[0]["zone_id"] = "";
    this.Clear();
  }

  Back(): void{
    this.navCtrl.navigateForward("/tabs/tab1");
  }

  Clear(){
    this.routineForm.reset() ;
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
  
}
