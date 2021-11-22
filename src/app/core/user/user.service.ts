import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { UserInterface } from './user';
import { TokenService } from '../token/token.service';
// está importando esse ' from 'jwt-decode'', tudo que tem dentro dele com esse nome jwt_decode
import * as jtw_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class UserService {

  // BehaviorSubject<UserInterface>(): ele precisa receber o valor que vai emitir no começo
  // ele emite um valor e guarda esse valor até alguém consumir esse valor
  private userSubject = new BehaviorSubject<UserInterface>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token =  this.tokenService.getToken();
    // as: vai garantir que quando for codificado, move para UserInterface
    const user = jtw_decode(token) as UserInterface;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    // tem sumir o nome do usuário que está no header
    this.userSubject.next(null)
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
