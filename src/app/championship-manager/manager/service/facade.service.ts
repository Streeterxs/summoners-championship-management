import { Injectable } from '@angular/core';

import { ManagerStoreService } from '../../../core/store/manager/manager-store.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private _managerStoreService: ManagerStoreService) { }
}
