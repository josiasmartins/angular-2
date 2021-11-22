import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
