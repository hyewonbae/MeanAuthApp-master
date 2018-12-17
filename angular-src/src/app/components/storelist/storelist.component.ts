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
      console.log("성공");
    },
    err=>{
      console.log(err);
      return false;
    })
  }
  deletestores(store){
    const stores={
      name:store.name,
      des1:store.des1,
      des2:store.des2,
      des3:store.des3, 
      call:store.call,
      add:store.add,
      count:store.count,
    }
    this.authService.deleteStore(stores).subscribe(data =>
      {
         console.log("성공");
        },
       err => { 
         console.log(err); 
        return false;
       });
       window.location.reload();
    }

}
