import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bathroom2Component } from './bathroom2.component';

describe('Bathroom2Component', () => {
  let component: Bathroom2Component;
  let fixture: ComponentFixture<Bathroom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bathroom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bathroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
