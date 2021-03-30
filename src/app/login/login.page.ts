import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';
import { 
  FormGroup, 
  FormBuilder, 
  FormControl, 
  Validators 
} from '@angular/forms';
import { AuthenticateServiceService } from '../services/authenticate-service.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages = {
    ip:[
      {type:"required", message:"La ip es requerido"},
      {type: "pattern", message:"Este no es una ip valido"}
    ],
    email:[
      {type:"required", message:"El email es requerido"},
      {type: "pattern", message:"Este no es un email valido"}
    ],
    password :[
      {type: "minLength", message:"Conraseña muy corta"},
      {type:"required", message:"La contraseña es requerida"}
    ]
  }
  errorMessage: string = '';
  

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenticateServiceService,
    private navCtrl: NavController,
    private storage: Storage,
    private apiService: ApiService, 
    public loadingController: LoadingController
  ) { 
    this.loginForm = this.formBuilder.group({
      ip : new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")
        ])
      ),
      email : new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password : new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    });
  }


  ngOnInit() {
  }

  loginUser(credentials){
    this.authService
    .loginUser(credentials)
    .then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/tabs/tab1");
    })
    .catch(err =>{
      this.errorMessage = err;
    });
    localStorage.setItem("ip",'http://'+credentials.ip+':5000');
    this.apiService.API_URI = 'http://'+credentials.ip+':5000';
  }
  goToRegister(){
    this.navCtrl.navigateForward("/register");
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Verificando',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}

