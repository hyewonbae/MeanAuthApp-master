import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private authService:AuthService, 
    private router:Router
    ) { }

    canActivate() {
      if(this.authService.loggedUser()) {
        return true;
      } else {
        this.router.navigate(['/usermain']);
        return false;
      }
    }
}