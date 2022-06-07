import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedDoorComponent } from './locked-door.component';

describe('LockedDoorComponent', () => {
  let component: LockedDoorComponent;
  let fixture: ComponentFixture<LockedDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
