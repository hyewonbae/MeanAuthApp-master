import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
    ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    // console.log(this.username);
    const user = {
      username: this.username,
      password: this.password
    }
    const newu={
      username:this.username,
      password:this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.showFlashMessage({
          messages: ['관리자 맞구나~~?'], 
          type: 'success', 
          timeout:3000
        });
        this.router.navigate(['adminmain']);
      } else{
        this.authService.authenticateNewu(user).subscribe(data => {
          if(data.success) {
            this.authService.storeNewuData(data.token, data.newu);
            this.flashMessage.showFlashMessage({
              messages: ['환영합니다~'], 
              type: 'success', 
              timeout:3000
            });
            this.router.navigate(['usermain']);
          } else {
            this.flashMessage.showFlashMessage({
                messages: ['다시 도전!'], 
                type: 'danger', 
                timeout:3000
              });
              this.router.navigate(['login']);
          }
        });
        







      }
    });
    
    
  }

}
