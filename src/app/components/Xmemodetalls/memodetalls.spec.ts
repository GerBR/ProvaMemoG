import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Memodetalls } from './memodetalls';

describe('Memodetalls', () => {
  let component: Memodetalls;
  let fixture: ComponentFixture<Memodetalls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Memodetalls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Memodetalls);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
