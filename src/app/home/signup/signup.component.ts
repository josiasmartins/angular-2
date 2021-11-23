import { PlatformDetectorService } from './../../core/plataform-detector/plataform-detector.service';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorsService } from './user-not-taken.validators.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { lowerCaseValidators } from 'src/app/shared/validators/lower-case.validators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  // ViewChild(): injeta o inputEmail
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  // formBuilder: passa haja injeção de depência para que eu possa montar esse carinha
  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorsService: UserNotTakenValidatorsService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) {

  }

  ngOnInit(): void {
     const fn = this.userNotTakenValidatorsService.checkUserNameTaken();
    this.signupForm = this.formBuilder.group({
      // Validators: valida
      // dentro do array, só entra o validators sincronos
      email: ['',
      [
        Validators.required,
        Validators.email
      ]],
      userName: ['',
      [
        // pattern(): expressão regular que tem começar com letra maiscula e pode número no final
        // Validators.pattern(/^[a-z0-9_\-]+$/),
        lowerCaseValidators,
        Validators.required,
        // minLength(): caracteres minimos
        Validators.minLength(2),
        // maxLength: tamanha máximo
        Validators.maxLength(30)
      ],
      // validator asincronos
      this.userNotTakenValidatorsService.checkUserNameTaken()
    ],
      fullName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      password: ['',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]]
    });

    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  signup() {
    // getRawValue(): ele de dá um objeto javaScript e com os valores digitados no formulário
    // as: é do tipo NewUser (minha interface)
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
      .signUp(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }
}
