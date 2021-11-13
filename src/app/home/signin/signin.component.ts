import { PlatformDetectorService } from './../../core/plataform-detector/plataform-detector.service';
import { AuthService } from '../../core/auth/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  // ElementRef: é um rapper. Uma casquinha que o angular coloca
  //             em volta do elemento do DOM para trabalhar com ele
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService;
    ) {}

  ngOnInit(): void {
    // esse loginForm controla o formulário
    this.loginForm = this.formBuilder.group({
      // Validators: ele tem vários método de validação
      //.require torna o campo obrigatório
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

    console.log('Vai se autenticar');
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      //subscribe(): se escrever
      .subscribe(
        // navigate(): ele vai juntar user e o valor do userName
        () => this.router.navigate(['user', userName]),
        err => {
          console.log()
          // reset(): limpa o formulário
          this.loginForm.reset();
          // se o focus for true, executa senão não
          this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus()
          alert('Invalid user name ')
        }
      );

  }
}
