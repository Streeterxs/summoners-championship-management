import { TestBed } from '@angular/core/testing';

import { PlayerStoreService } from './player-store.service';

describe('PlayerStoreService', () => {
  let service: PlayerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
