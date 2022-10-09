import { Component, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../../services/login/login.service';
import { ToasterService } from '../../../services/toaster/toaster.service';
interface credentials {
  userName: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginCreds: credentials = {
    userName: "",
    password: ""
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toaster: ToasterService
    ) { }

  ngOnInit(){

  }

  onLogin(){
    this.loginService.doLogin(this.loginCreds.userName,this.loginCreds.password)
      .then((result:any) => {
        this.toaster.showSuccess("Inicio de sesion exitoso!", "Exito")
        this.router.navigate(['dashboard'])
      })
      .catch((err : any) => {
        switch (err.message) {
          case "Firebase: Error (auth/invalid-email).": 
          case "Firebase: Error (auth/user-not-found).": 
            this.toaster.showWarning("Correo electronico incorrecto!", "Error");
            break;
          case "Firebase: Error (auth/wrong-password).":
            this.toaster.showWarning("Contraseña incorrecta!", "Error");
            break;
          default:
            this.toaster.showWarning("Hubo un error desconocido!", "Error");
            console.error(err)
            break;
            }
      })
  }
}
