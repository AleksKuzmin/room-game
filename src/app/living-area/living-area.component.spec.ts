import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingAreaComponent } from './living-area.component';

describe('LivingAreaComponent', () => {
  let component: LivingAreaComponent;
  let fixture: ComponentFixture<LivingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
