import { Component } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor (private fb: FormBuilder, public userService: UserService, public router: Router) {}

  get name() {
    return this.formUser.get('name');
  }

  get lastName() {
    return this.formUser.get('lastName');
  }

  get userName() {
    return this.formUser.get('userName');
  }

  get password() {
    return this.formUser.get('password');
  }

  get docID() {
    return this.formUser.get('docID');
  }

  get phone() {
    return this.formUser.get('phone');
  }

  formUser = this.fb.group({
    'name': ['', Validators.required],
    'lastName': ['', Validators.required],
    'userName': ['', Validators.required],
    'docID': ['', Validators.required],
    'password': ['', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)
      ] 
    ],
    'phone': ['', [Validators.required, Validators.pattern(/[0-9]{10}/)]]
  });


  register () {
    const newUser = this.formUser.value;
    newUser.docID = String(newUser.docID);

    this.userService.register(newUser).subscribe(
      (data) => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/lobby');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
