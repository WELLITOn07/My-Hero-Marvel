import { TestBed } from '@angular/core/testing';

import { FindHeroService } from './find-hero.service';

describe('FindHeroService', () => {
  let service: FindHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
