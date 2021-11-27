import { RequestInterceptor } from './auth/request.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
