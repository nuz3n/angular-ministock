import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  message:string = "Hello Angular";

  profile = {
    name: "Zen",
    tel: "0839595478",
    gender: "Male"
  };

  userData = {
    email: "",
    password: ""
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitLogin(){
    if(this.userData.email == "admin@email.com" && this.userData.password == "1234"){
      this.router.navigate(['backend'])
    }
    else{
      alert("Login Fail!!!");
    }
  }

}
