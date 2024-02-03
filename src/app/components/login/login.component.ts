import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  async login() {
    try {
      let resp = await this.authService.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      // TODO: redirect
    } catch(e) {
      // show Error Message
      console.error('Error in fetch token: ', e);    
    }
  }




}
