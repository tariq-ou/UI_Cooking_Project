import { TestBed } from '@angular/core/testing';

import { CookingApi } from './cookingapi';

describe('Cookingapi', () => {
  let service: CookingApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookingApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
