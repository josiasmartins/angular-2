import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
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
          alert('Invalid user name ')
        }
      );

  }
}
