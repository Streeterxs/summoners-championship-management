import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagerStoreService } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipGuard implements CanActivate {

  constructor(private _managerService: ManagerStoreService, private _router: Router, private _aR: ActivatedRoute) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._managerService.championship) {
      // redirect to some view explaining what happened
      this._router.navigate(['../creation'], {relativeTo: this._aR});
      return false;
    } else {
      return true;
    }
  }

}
