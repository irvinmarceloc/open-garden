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
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  rutinas: any;
    
  routineForm: FormGroup;

  mensaje: String = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
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

  Delete(id){
    console.log(id);
    this.mensaje = "Eliminado con exito";
  }

  Back(): void{
    this.navCtrl.navigateForward("/tabs/tab1");
  }
}
