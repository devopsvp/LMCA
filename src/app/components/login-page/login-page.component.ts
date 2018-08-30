import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorMsg: string;
  errorDisplay: boolean = false;
  login: any = [
    {
      username: "Test",
      password: "Test1234"
    },
    {
      username: "User",
      password: "User1234"
    },
    {
      username: "Guest",
      password: "Guest1234"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignIn(e) {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    for (let i = 0; i < this.login.length; i++) {
      if (this.login[i].username == username && this.login[i].password == password) {
        this.router.navigateByUrl('/main/home');
      } else {
        this.errorDisplay = true;
        this.errorMsg = "Invalid credentials";
      }

    }
  }

}

