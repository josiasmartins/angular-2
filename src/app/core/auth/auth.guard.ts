import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root'})
// implementar algumas guardas de rotas
export class AuthGuard implements CanActivate {

  constructor(
    private UserService: UserService,
    private router: Router
    ) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

    if(this.UserService.isLogged()) {
      this.router.navigate(['user', this.UserService.getUserName()])

      return false;
    }
    console.log('Ativou guarde de rota');
    return true;
  }
}
