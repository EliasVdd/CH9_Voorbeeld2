import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();
    console.log('logging in');
    this.router.navigate(['']);
  }

}
