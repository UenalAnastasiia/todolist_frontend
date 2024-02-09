import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  async login() {
    try {
      let resp: any = await this.authService.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      //localStorage.setItem('token', resp['token']);
      localStorage.setItem('token', JSON.stringify({token: resp['token'], id: resp['user_id']}));
      this.router.navigateByUrl('/todos');
    } catch(e) {
      alert('Error in Login. Wrong username or Password.')
      console.error('Error in fetch token: ', e);    
    }
  }
}