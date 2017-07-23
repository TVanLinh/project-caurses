import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenService} from './authen.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenGuardService implements CanActivate {
  constructor(private authen: AuthenService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.authen.isAuthenticated();
  }

}
