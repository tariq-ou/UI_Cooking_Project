import { TestBed } from '@angular/core/testing';

import { Cookingapi } from './cookingapi';

describe('Cookingapi', () => {
  let service: Cookingapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cookingapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
