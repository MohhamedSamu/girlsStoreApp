import { Component, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../../services/login/login.service';

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
    private router: Router) { }

  ngOnInit(){

  }

  onLogin(){
    this.loginService.doLogin(this.loginCreds.userName,this.loginCreds.password)
      .then((result:any) => {
        this.router.navigate(['dashboard'])
        console.log(result)
      })
      .catch((err : any) => console.error(err))
  }
}
