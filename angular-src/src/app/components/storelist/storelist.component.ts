import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../../models/store'
@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.component.html',
  styleUrls: ['./storelist.component.css']
})
export class StorelistComponent implements OnInit {
  stores: Store;
  constructor() { }

  ngOnInit() {
  }

}
