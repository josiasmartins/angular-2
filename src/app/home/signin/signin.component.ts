import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // esse loginForm controla o formulário
    this.loginForm = this.formBuilder.group({
      // Validators: ele tem vários método de validação
      //.require torna o campo obrigatório
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
