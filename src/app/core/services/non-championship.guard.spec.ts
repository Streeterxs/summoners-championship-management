import { TestBed } from '@angular/core/testing';

import { NonChampionshipGuard } from './non-championship.guard';

describe('NonChampionshipGuard', () => {
  let guard: NonChampionshipGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonChampionshipGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
