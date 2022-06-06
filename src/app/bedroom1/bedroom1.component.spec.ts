import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bedroom1Component } from './bedroom1.component';

describe('Bedroom1Component', () => {
  let component: Bedroom1Component;
  let fixture: ComponentFixture<Bedroom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bedroom1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bedroom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
