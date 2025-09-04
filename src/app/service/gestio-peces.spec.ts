import { TestBed } from '@angular/core/testing';

import { GestioPecesSercice} from './gestio-peces';

describe('GestioPeces', () => {
  let service: GestioPecesSercice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioPecesSercice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
