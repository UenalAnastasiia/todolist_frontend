import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  async login() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": this.username,
      "password": this.password
    });

    const requestOptions:RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      let resp = await fetch("http://127.0.0.1:8000/login/", requestOptions);
      let jsonData = await resp.json();
      localStorage.setItem('token', jsonData.token);
      // TODO: redirect
    } catch(e) {
      console.error('Error in fetch token: ', e);    
    }
  }

}
