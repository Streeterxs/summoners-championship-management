import { TestBed } from '@angular/core/testing';

import { ChampionshipStoreService } from './championship-store.service';

describe('ChampionshipStoreService', () => {
  let service: ChampionshipStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionshipStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
