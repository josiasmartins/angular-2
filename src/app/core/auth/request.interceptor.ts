import { TokenService } from './../token/token.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  // intercept(): caso não interceptamos nada, retornará um next com req, para indicar que não há nenhuma mudança
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          'x-access-token': token
        }
      });
    }
    // next.handler(): precisa receber nossa requisição modificada
    return next.handle(req);
  }

}
