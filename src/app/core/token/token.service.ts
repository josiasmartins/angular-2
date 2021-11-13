import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

  // retorna um boolean
  hasToken() {
    // !!: se esse cara for nulo, ele troca pra true e depois pra falso;
    return !!this.getToken()
  }

  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  // vai pegar o token
  getToken() {
    return window.localStorage.getItem(KEY);
  }

  // remove o token
  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
