import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.component.html',
  styleUrls: ['./addstore.component.css']
})
export class AddstoreComponent implements OnInit {
  name: String;
  des: String;
  constructor(private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onAddStoreSubmit() {
    const store = {
      name: this.name,
      des: this.des,
     // email: this.email,
     // password: this.password
    }

  // Required Fields
    if(!this.validateService.validateAddStore(store)) {
      this.flashMessage.showFlashMessage({messages: ['Please fill in all fields'], type: 'danger', timeout:2000});
      return false;
    }

   
    // Register User
    this.authService.addStore(store).subscribe(data => {
      if(data.success) {
        this.flashMessage.showFlashMessage({
          messages: ['You are now added and check in your app! '], 
          type: 'success', 
          timeout:5000
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.showFlashMessage(
          {messages: ['Something went wrong'], 
          type: 'danger', 
          timeout:3000
        });
        this.router.navigate(['/addstore']);
      }
    })
  }

}
