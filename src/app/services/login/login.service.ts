import { Injectable } from '@angular/core';

import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth) { }

  public doLogin(userName:string, password:string) : any {
    return signInWithEmailAndPassword(this.auth, userName, password)
  }

  public doRegister(userName:string, password:string) : any {
    return createUserWithEmailAndPassword(this.auth, userName, password)
  }

  public doLogout(){
    return signOut(this.auth);
  }
}
