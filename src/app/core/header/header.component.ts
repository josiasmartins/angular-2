import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component } from '@angular/core';
import { UserInterface } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  // user$: é uma boa prática colocar um $ quando for um Observable. Vai aguardar um valor de Observable
  user$: Observable<UserInterface>
  userInterface: UserInterface

  constructor(
    private userService: UserService,
    private router: Router
    ) {
    this.user$ = userService.getUser();
    // me escrevo no Observable e pego ele cara
    // this.user$.subscribe(user => this.userInterface = user);
  }

  logout() {
    this.userService.logout();
    this.router.navigate([''])
  }
}
