import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  public showSuccess(message:string, title:string){
    this.toastr.success(message, title)
  }

  public showWarning(message:string, title:string){
    this.toastr.warning(message, title)
  }
}
