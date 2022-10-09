import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

import { LoginService } from '../../../services/login/login.service';


@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private router: Router,
    private loginService: LoginService, 
    private classToggler: ClassToggleService,
    private toaster: ToasterService
    ) {
      super();
  }


  onLogout(){
    this.loginService.doLogout()
      .then((result:any) => {
        this.toaster.showSuccess("Sesion cerrada con exitoso!", "Exito")
        this.router.navigate(['login'])
      })
      .catch((err : any) => console.error(err))
  }
}
