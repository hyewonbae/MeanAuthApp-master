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
  des1: String;
  des2: String;
  des3: String;
  call: Number;
  add: String;
  count:Number;
  pic:any;
  constructor(private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onAddStoreSubmit() {
    const store = {
      name: this.name,
      des1: this.des1,
      des2: this.des2,
      des3: this.des3,
      call: this.call,
      add: this.add,
      pic:this.pic
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
