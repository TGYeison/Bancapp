import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentpath: string = '';

  constructor (public router: Router, public userService: UserService) {} 

  ngOnInit () {
    this.router.events.subscribe((event:any) => {
      if(event.url)
        this.currentpath = event?.url;
    });
  }

  signOut () {
    this.userService.signOut();
    this.router.navigateByUrl('/login');
  }
}
