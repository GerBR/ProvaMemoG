import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galleymemos } from './galleymemos';

describe('Galleymemos', () => {
  let component: Galleymemos;
  let fixture: ComponentFixture<Galleymemos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galleymemos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galleymemos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
