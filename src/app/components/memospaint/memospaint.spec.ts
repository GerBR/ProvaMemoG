import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Memospaint } from './memospaint';

describe('Memospaint', () => {
  let component: Memospaint;
  let fixture: ComponentFixture<Memospaint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Memospaint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Memospaint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
