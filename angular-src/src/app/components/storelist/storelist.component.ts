import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../../models/store'
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.component.html',
  styleUrls: ['./storelist.component.css']
})
export class StorelistComponent implements OnInit {
  stores: Object;               ///////////////////////요부분부터 전체!
  constructor( 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    

    this.authService.getStore().subscribe(data => {
      this.stores = data.store;
    },
    err=>{
      console.log(err);
      return false;
    })
  }

}
