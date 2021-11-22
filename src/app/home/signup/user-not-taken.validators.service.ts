import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';
import { Injectable } from '@angular/core';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

// providebIn: 'root': tem uma única instância que serve para toda aplicação
@Injectable({providedIn: 'root'})
export class UserNotTakenValidatorsService {

  // validators não aceita injeçã de dependencia
  // colocar modificador de acesso para usar em outros lugares
  constructor(private signUpService: SignUpService) {}

    // tem um método nesse serviço, que ao ser chamado, me retorna uma função de validação
    checkUserNameTaken() {

      // quando for chamado, retornará uma função que recebe um AbstractControl
      return (control: AbstractControl) => {
        // não quero a cada momento na busca, ele procure por todos os dígitos
        return control
          .valueChanges
          // todo Observable, posso encaminhar uma chamada pipe()
          // debouceTime(): ele vai verficar a cada 300 segundos depois de dígitado
          .pipe(debounceTime(300))
          // agora precisa fazer a pesquisa na API
          // o valor que digitou, vo capturar no switchMAp e passar no checkUserNameTaken
          .pipe(switchMap(userName =>
             this.signUpService.checkUserNameTaken(userName)
          ))
          .pipe(map(isTaken => isTaken ? {userNameTaken: true} : null))
          .pipe(first());
      }
    }
}
