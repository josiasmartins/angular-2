import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:3000';
@Injectable({
  // root: é uma instancia que serve para aplicação inteira
  providedIn: 'root'
})
export class AuthService {

  // POST: enviando dado

  // para realizar requisição asincronas, preciso do HttpClient
  // se não colocar private, ele não vai ser um atributo, por isso sem acesso
  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {
    // quando o nome de uma variável é o parametro, pode omitir
    return this.http.post(API_URL + '/user/login', {userName, password})
  }
}
