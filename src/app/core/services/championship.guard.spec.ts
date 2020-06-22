import { TestBed } from '@angular/core/testing';

import { ChampionshipGuard } from './championship.guard';

describe('ChampionshipGuard', () => {
  let guard: ChampionshipGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChampionshipGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
