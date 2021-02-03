import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";

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
    private storage: Storage
  ) { 
    this.loginForm = this.formBuilder.group({
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
  }
  goToRegister(){
    this.navCtrl.navigateForward("/register");
  }
}

