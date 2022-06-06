import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bedroom2Component } from './bedroom2.component';

describe('Bedroom2Component', () => {
  let component: Bedroom2Component;
  let fixture: ComponentFixture<Bedroom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bedroom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bedroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
