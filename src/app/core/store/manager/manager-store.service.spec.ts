import { TestBed } from '@angular/core/testing';

import { ManagerStoreService } from './manager-store.service';

describe('ManagerStoreService', () => {
  let service: ManagerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
