import { TestBed } from '@angular/core/testing';

import { Memoryimg } from './memoryimg';

describe('Memoryimg', () => {
  let service: Memoryimg;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Memoryimg);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
