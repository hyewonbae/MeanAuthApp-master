import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  newu: any;
  store: any;
  user: any;
  review: any;

  constructor(private http:Http) { }
  
  deleteUser(){
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/newus/deleteuser', {headers: headers})
      .pipe(map(res => res.json()));
  } 
  deleteReview(){
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/reviews/deletereview', {headers: headers})
      .pipe(map(res => res.json()));
  }
  deleteStore(stores){
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/stores/removestore',stores,{headers: headers})
      .pipe(map(res => res.json()));
  }
  getStore() {   /////////////////////요부분
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/stores/storelist', {headers: headers})
      .pipe(map(res => res.json()));
  }
  getReview() {   /////////////////////요부분
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/reviews/reviewlist', {headers: headers})
      .pipe(map(res => res.json()));
  }

  registerNewu(newu) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/newus/register', newu, {headers: headers})
      .pipe(map(res => res.json()));
  }
  addStore(store) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/stores/addstore', store, {headers: headers})
      .pipe(map(res => res.json()));
  }
  addReview(review) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reviews/addreview', review, {headers: headers})
      .pipe(map(res => res.json()));
  }
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .pipe(map(res => res.json()));
  }
authenticateNewu(newu) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/newus/authenticate', newu, {headers: headers})
      .pipe(map(res => res.json()));
  }
  getProfile() {  
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/newus/userlist', {headers: headers})
      .pipe(map(res => res.json()));
  }

  storeNewuData(token, newu) {
    localStorage.setItem('idd_token', token);
    localStorage.setItem('newu', JSON.stringify(newu));
    this.authToken = token;
    this.newu = newu;
    console.log("서ㅓㅓ어공");
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    console.log("서ㅓㅓDDDDDDDDDD어공");
  }
  loadUserToken() {
    const token = localStorage.getItem('idd_token');
    this.authToken = token;
  }
  loggedUser() {
    return tokenNotExpired('idd_token');
    
   }

   loggedIn() {
    return tokenNotExpired('id_token');
   }

  logout() {
    this.authToken = null;
    this.user = null;
    
    localStorage.clear();
  }
  
}
 