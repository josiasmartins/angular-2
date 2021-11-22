import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:3000'
// providenIn: vai uma unica instancia para aplicação inteira
@Injectable({providedIn: 'root'})
export class SignUpService {

  // para acessar, preciso tornar uma propriedade da classe. Faz isso com modificadores de acesso: private, public e protect
  constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {

      return this.http.get(API_URL + '/user/exists/' + userName);
    }

    // vai acessar API
    signUp(newUser: NewUser) {
      return this.http.post(API_URL + '/user/signup', newUser);
    }

}
