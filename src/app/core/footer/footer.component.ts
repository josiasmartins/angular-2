import { UserService } from './../user/user.service';
import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../user/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  user$: Observable<UserInterface>

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();

  }

}
