import { HomeComponent } from './home.component';
import { SignUpComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { VMessagesMoudule } from './../shared/components/vmessages/vmessages.module';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SigninComponent,
    SignUpComponent,
    HomeComponent
  ],
  // ReactiveFormsModule: disponibiliza diretiva; disponibiliza vários recursos para fazer a validação
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    VMessagesMoudule,
    RouterModule
  ]
})
export class HomeModule {

}
