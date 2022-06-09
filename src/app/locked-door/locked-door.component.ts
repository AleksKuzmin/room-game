import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-locked-door',
  templateUrl: './locked-door.component.html',
  styleUrls: ['./locked-door.component.css'],
})
export class LockedDoorComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  color!: string;

  constructor(private utilityService: UtilityService) {}
  changeColor() {
    this.subscription = this.utilityService.roomColor.subscribe((v) => {
      this.color = v;
    });
  }

  ngOnInit(): void {
    this.changeColor();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
