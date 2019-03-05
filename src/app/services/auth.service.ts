import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "https://bioscoopapp-nodejs.herokuapp.com/api/register";
  private _loginUrl = "https://bioscoopapp-nodejs.herokuapp.com/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    sessionStorage.removeItem('token')
    this._router.navigateByUrl('login')
  }

  getToken() {
    return sessionStorage.getItem('token')
  }

  loggedIn() {
    return !!sessionStorage.getItem('token')    
  }
}