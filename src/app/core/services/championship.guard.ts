import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagerStoreService } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipGuard implements CanActivate {

  constructor(private _managerService: ManagerStoreService) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !!this._managerService.championship;
  }

}
