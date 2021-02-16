import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Params} from '@angular/router';
import { ApiService } from '../services/api.service';
import { ScheduleSend } from '../models/Interface'
import { 
  FormGroup, 
  FormBuilder, 
  FormControl
} from '@angular/forms';
import { AlertController } from '@ionic/angular';


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
    private formBuilder: FormBuilder,
    public alertController: AlertController
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
    
  Update(routineData: ScheduleSend){
    console.log(routineData);
    
    routineData.status = 'pending';
    routineData.date_from = this.CortarFecha(routineData.date_from);
    routineData.time_from = this.CortarHora(routineData.time_from);
    routineData.date_to = this.CortarFecha(routineData.date_to);
    routineData.time_to = this.CortarHora(routineData.time_to);

    console.log(this.rutinas[0]);
    this.apiService.update(this.rutinas[0]['watering_id'],  routineData).toPromise().then(resp =>{
      console.log("resp", resp);
      this.mensaje = "Actualización exitosa";
      this.rutinas[0]["zone_id"] = "";
      this.Clear();
    }).catch(error =>{
      console.log("error ", error );
      this.mensaje = "Fallo de actualización";
    });
    
  }

  delete(){
    this.apiService.delete(this.rutinas[0]['watering_id']).toPromise().then(resp =>{
      console.log("resp", resp);
      this.navCtrl.back();
      this.mensaje = "Eliminado con exito";      
    }).catch(error =>{
      console.log("error ", error );
      this.navCtrl.back();
      this.mensaje = "Fallo al eliminar";
    });
  } 

  Clear(){
    this.routineForm.reset() ;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: '',
      subHeader: 'Eliminar',
      message: '¿Eliminar este registro?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.delete();
          }
        }
      ]
    });

    await alert.present();
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
