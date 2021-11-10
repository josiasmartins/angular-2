import { VMessagesMoudule } from './../shared/components/vmessages/vmessages.module';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent],
  // ReactiveFormsModule: disponibiliza diretiva; disponibiliza vários recursos para fazer a validação
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessagesMoudule
  ]
})
export class HomeModule {

}
