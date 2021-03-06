import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.model)
    .subscribe(
      res => {
        sessionStorage.setItem('token', res.token)
        this._router.navigateByUrl('movies')
      },
      err => console.log(err)
    ) 
  }
}
