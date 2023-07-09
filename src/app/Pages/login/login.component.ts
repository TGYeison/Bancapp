import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (private fb: FormBuilder, public userService: UserService, public router: Router) {}

  get userName() {
    return this.formLogin.get('userName');
  }

  get password() {
    return this.formLogin.get('password');
  }

  formLogin = this.fb.group({
    'userName': ['', Validators.required],
    'password': ['', [Validators.required] 
    ],
  });

  login () {
    const credentials = this.formLogin.value;
   
    this.userService.login(credentials).subscribe((data) => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/lobby');
    });
  }
}
