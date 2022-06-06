import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bathroom1Component } from './bathroom1.component';

describe('Bathroom1Component', () => {
  let component: Bathroom1Component;
  let fixture: ComponentFixture<Bathroom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bathroom1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bathroom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
