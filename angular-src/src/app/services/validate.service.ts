import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(newu) {
    if(newu.name == undefined || newu.username == undefined || newu.password == undefined) {
      return false;
    } else {
      return true;
    }
  }
  validateAddStore(store) {
    if(store.name == undefined){
      return false;
    } else {
      return true;
    }
  }

  // validateEmail(email) {
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }
}
