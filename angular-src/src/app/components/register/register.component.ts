import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
 // email: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const newu = {
      name: this.name,
      username: this.username,
     // email: this.email,
      password: this.password
    }

  // Required Fields
    if(!this.validateService.validateRegister(newu)) {
      this.flashMessage.showFlashMessage({messages: ['빈 칸을 다 채우십시오.'], type: 'danger', timeout:2000});
      return false;
    }

    // Validate Email
    // if(!this.validateService.validateEmail(user.email)) {
    //   this.flashMessage.showFlashMessage({messages: ['Please use a valid email'], type: 'danger', timeout:2000});
    //   return false;
    // }

    // Register User
    this.authService.registerNewu(newu).subscribe(data => {
      if(data.success) {
        this.flashMessage.showFlashMessage({
          messages: ['가입완료!'], 
          type: 'success', 
          timeout:5000
        });
        this.router.navigate(['/']);
      } else {
        this.flashMessage.showFlashMessage(
          {messages: ['다시 입력해주세요.'], 
          type: 'danger', 
          timeout:3000
        });
        this.router.navigate(['/register']);
      }
    })
  }

}
