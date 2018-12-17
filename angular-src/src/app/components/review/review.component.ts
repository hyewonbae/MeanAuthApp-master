import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Object;               ///////////////////////요부분부터 전체!
  constructor( 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    

    this.authService.getReview().subscribe(data => {
      this.reviews = data.review;
      console.log("성공");
    },
    err=>{
      console.log(err);
      return false;
    })
  }
  deletereviews(review){
    const reviews={
     
      name:review.name,
      des:review.des
    }
    this.authService.deleteReview(reviews).subscribe(data =>
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