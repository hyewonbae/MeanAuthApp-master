import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';

enableProdMode();
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: Object;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      this.users = data.user;
      console.log("성공");
    }, 
    err => {
      console.log(err);
      return false;
    })
  }
  deleteusers(){
    this.authService.deleteUser().subscribe(data =>
      {
         this.users = data.user; 
         console.log("성공");
        },
       err => { 
         console.log(err); 
        return false;
       });
    }
}
