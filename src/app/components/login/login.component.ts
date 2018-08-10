import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username':'', 'password':''};
  private loggedIn = false;

  constructor(private loginService: LoginService) { }

  onSubmit() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res => {
        console.log(res);
        const encodedCredentials = btoa(this.credential.username+":"+this.credential.password);
        localStorage.setItem('credentials', encodedCredentials);
        localStorage.setItem('xAuthToken', res.json().token);
        this.loggedIn = true;
        location.reload();
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      err => {
        this.loggedIn = false;
      }
    );
  }
}
